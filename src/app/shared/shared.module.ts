import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { EqualValidator } from './equal-validator.directive';
import { DateDirective } from './date.directive';
import { UpperCaseText } from './uppercase.directive';
import { PostalCodeFormatDirective } from './postalcode-format.directive';
import { OnlyNumbersDirective } from './only-numbers.directive';

@NgModule({
  declarations: [
    DropdownDirective,
    EqualValidator,
    DateDirective,
    UpperCaseText,
    PostalCodeFormatDirective,
    OnlyNumbersDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    EqualValidator,
    DateDirective,
    UpperCaseText,
    PostalCodeFormatDirective,
    OnlyNumbersDirective
  ]
})
export class SharedModule {
}
