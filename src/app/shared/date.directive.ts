import {Directive, ElementRef, forwardRef, HostListener, Renderer2} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Directive({
  selector: '[DateFormat]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DateDirective), multi: true },
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DateDirective), multi: true },
    DatePipe
  ]
})
export class DateDirective implements Validator, ControlValueAccessor {

  testDate: string;

  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef,
    private datePipe: DatePipe){
  }

  writeValue(obj: any): void {
    if(obj){
      let textDate = this.datePipe.transform(obj, 'dd-MM-yyyy');
      this.testDate = textDate;
      this.renderer.setProperty(this.elRef.nativeElement, 'value', textDate);
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  // Not Used
  registerOnTouched(fn: any): void {
  }

  private propagateChange = (_: any) => {
  };

  validate(c: AbstractControl): { [key: string]: any; } {
    let value = c.value;
    if(!value){
      return null;
    }

    let regex = new RegExp(/\d{2}-\d{2}-\d{4}/);

    if (!regex.test(this.testDate)) {
      return {validDate: false};
    }

    let values = this.testDate.split('-');
    let date = new Date(parseInt(values[2]), parseInt(values[1])-1, parseInt(values[0]));

    if (isNaN(date.getTime())) {
      return {validDate: false};
    }

    // Block dates in the future (for DateOfBirth purposes)
    var currentDate = new Date();
    var pastDate = new Date();
    pastDate.setUTCFullYear(currentDate.getFullYear() -100);
    if(date > currentDate || date < pastDate){
      return {valueNotAllowed: true};
    }

    // Reverse Validate Date
    if ((date.getFullYear() !== parseInt(values[2])) || (date.getMonth() !== parseInt(values[1])-1)) {
      return {validDate: false};
    }

    return null;
  }

  @HostListener('input', ['$event.target.value']) onChange = (value: any) => {
    this.testDate = value;

    // Auto-add hyphens
    if((value.length === 3 || value.length === 6) && !value.endsWith('-'))
    {
      value = value.substring(0, value.length -1) + '-' + value.substring(value.length-1);
      this.elRef.nativeElement.value = value;
    }

    let values = value.split('-');
    let date = new Date(Date.UTC(values[2], values[1]-1, values[0]));

    this.propagateChange(date);
  };

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;

    if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode == 65 && e.ctrlKey === true) ||
      // Allow: Ctrl+C
      (e.keyCode == 67 && e.ctrlKey === true) ||
      // Allow: Ctrl+V
      (e.keyCode == 86 && e.ctrlKey === true) ||
      // Allow: Ctrl+X
      (e.keyCode == 88 && e.ctrlKey === true) ||
      // Allow: -
      (e.keyCode == 109) || (e.keyCode == 189) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }
}
