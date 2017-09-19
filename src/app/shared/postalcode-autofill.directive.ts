import { Attribute, Directive, ElementRef, forwardRef, HostListener, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appPostalcodeAutofill]',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PostalcodeAutofillDirective), multi: true }
  ]
})
export class PostalcodeAutofillDirective implements ControlValueAccessor{

  private elementRef: HTMLInputElement;
  private field: ElementRef;

  writeValue(obj: any): void {
    if (obj) {
      this.elementRef.value = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  private propagateChange = (_: any) => {
  }


  @HostListener('input', ['$event.target.value']) onChange = (value: any) => {
    // console.log('Yeps');
    // this.elementRef.value = value.toUpperCase();
    this.field.nativeElement.value = 'Bup';
  }

  // @HostListener('input', ['$event.target.value']) onChange = (value: any) => {
  //   this.elementRef.value = value.toUpperCase();
  //   this.propagateChange(value.toUpperCase());
  // };


  constructor(
    private ref: ElementRef,
    @Attribute('appPostalcodeAutofill') public appPostalcodeAutofill: string,
    @Attribute('addressNumber') public addressNumber: string,
    @Attribute('addressField') public addressField: string,
    @Attribute('cityField') public cityField: string
  ) {

    this.elementRef = this.ref.nativeElement;

    console.log('Loaded');
    console.log(this.ref);

    // this.field = this.ref.nativeElement.root.findElement(this.addressField);
    console.log(this.field);
    // field.value = 'Bup';
  }

}
