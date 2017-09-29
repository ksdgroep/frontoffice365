import { Directive, ElementRef, forwardRef, HostListener } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Directive({
  selector: '[PostalCodeFormat]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => PostalCodeFormatDirective), multi: true},
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PostalCodeFormatDirective), multi: true},
    DatePipe
  ]
})
export class PostalCodeFormatDirective implements Validator, ControlValueAccessor {

  constructor(private elRef: ElementRef) {
  }

  writeValue(obj: any): void {
    if (obj) {
      this.elRef.nativeElement.value = obj;
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
    // Validation Disabled

    // const value = c.value;
    // if (!value) {
    //   return null;
    // }
    //
    // const regex = new RegExp(/^[1-9][0-9]{3}? (?!SA|SD|SS)[A-Z]{2}$/);
    //
    // if (!regex.test(value)) {
    //   return {invalidPostalCode: true};
    // }

    return null;
  }

  @HostListener('input', ['$event.target.value']) onChange = (value: any) => {
    // Auto-add space
    if ((value.length === 5) && !value.endsWith(' ')) {
      value = value.substring(0, value.length - 1) + ' ' + value.substring(value.length - 1);
    } else if (value.length === 6 && value.endsWith(' ')) {
      value = value.substring(0, value.length - 1);
    }

    this.elRef.nativeElement.value = value.toUpperCase();
    this.propagateChange(value.toUpperCase());
  };
}
