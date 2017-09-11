import {Directive, ElementRef, forwardRef, HostListener} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Directive({
  selector: '[UpperCaseText]',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => UpperCaseText), multi: true }
  ]
})
export class UpperCaseText implements ControlValueAccessor {

  private elementRef: HTMLInputElement;

  constructor(private ref: ElementRef) {
    this.elementRef = this.ref.nativeElement;
  }

  writeValue(obj: any): void {
    if(obj){
      this.elementRef.value = obj;
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

  @HostListener('input', ['$event.target.value']) onChange = (value: any) => {
    this.elementRef.value = value.toUpperCase();
    this.propagateChange(value.toUpperCase());
  };

  @HostListener('blur', ['$event.target.value']) onBlur = (value: any) => {
    this.elementRef.value = value.toUpperCase();
    this.propagateChange(value.toUpperCase());
  };

}
