import {Directive, Input, HostBinding, OnInit, OnChanges} from '@angular/core';

@Directive({
  selector: '[appValidationError]'
})
export class ValidationErrorDirective implements OnInit, OnChanges {
  @Input() appValidationError = false;
  @HostBinding('class.has-error') hasError = false;
  @HostBinding('class.has-feedback') hasFeedback = false;

  constructor() { }

  ngOnInit() {
    this.hasError = this.appValidationError;
    this.hasFeedback = this.appValidationError;
  }

  ngOnChanges() {
    this.hasError = this.appValidationError;
    this.hasFeedback = this.appValidationError;
  }
}
