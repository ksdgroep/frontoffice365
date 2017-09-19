import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { EqualValidator } from './equal-validator.directive';
import { DateDirective } from './date.directive';
import { UpperCaseText } from './uppercase.directive';
import { PostalCodeFormatDirective } from './postalcode-format.directive';
import { OnlyNumbersDirective } from './only-numbers.directive';
import { PostalcodeAutofillDirective } from './postalcode-autofill.directive';

@NgModule({
  declarations: [
    DropdownDirective,
    EqualValidator,
    DateDirective,
    UpperCaseText,
    PostalCodeFormatDirective,
    OnlyNumbersDirective,
    PostalcodeAutofillDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    EqualValidator,
    DateDirective,
    UpperCaseText,
    PostalCodeFormatDirective,
    PostalcodeAutofillDirective,
    OnlyNumbersDirective
  ]
})
export class SharedModule {
}
