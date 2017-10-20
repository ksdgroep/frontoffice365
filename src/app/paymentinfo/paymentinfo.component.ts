import { Component, OnInit, ViewChild } from '@angular/core';

import { Order } from '../bll/order';
import { Country } from '../bll/country';
import { Course } from '../bll/course';
import { CountryService } from '../services/country.service';
import { GlobalFunctionsService } from '../services/global-functions.service';
import { Router } from '@angular/router';
import { PostalCodeService } from '../services/postalcode.service';
import { CanComponentDeactivate } from '../validation.guard';
import { environment } from '../../environments/environment';
import { AppConfig } from '../app.config';

export class ClientCheck {
  public static get ClientCode(): string {
    return environment.clientCode;
  }
}

@Component({
  moduleId: module.id,
  selector: 'fo-paymentinfo',
  templateUrl: ClientCheck.ClientCode === 'gt'
  ? './paymentinfo.component.gt.html'
  : './paymentinfo.component.html',
  providers: [CountryService, PostalCodeService]
})

export class PaymentinfoComponent implements OnInit, CanComponentDeactivate {

  order: Order;
  countries: Country[];
  course: Course;
  formDeactivationCheck = false;

  // GT Functions

  vatRequired: boolean;

  // ------------

  @ViewChild('contactForm') form;

  constructor(private countryService: CountryService,
              private globalFunctionsService: GlobalFunctionsService,
              private postalCodeService: PostalCodeService,
              private router: Router,
              private config: AppConfig) {
    this.globalFunctionsService.showBasket(true);
    this.globalFunctionsService.showTabs(true);
  }

  getCountries(): void {
    this.countryService.getCountries().then(countries => this.countries = countries);
  }

  saveInfo(isValid: boolean): void {
    if (isValid) {
      // Show Summary
      this.globalFunctionsService.enableTabs(4);
      // Redirect
      // TODO: Animate
      window.scrollTo(0, 0);
      this.router.navigate(['confirm'], {queryParamsHandling: 'merge'});
    }
  }

  previousTab(): void {
    // Redirect
    // TODO: Animate
    window.scrollTo(0, 0);
    this.router.navigate(['students'], {queryParamsHandling: 'merge'});
  }

  ngOnInit(): void {
    this.getCountries();
    this.order = this.globalFunctionsService.getOrder();
    this.course = this.globalFunctionsService.getSelectedCourse();

    // GT Functions

    this.vatRequired = this.config.getConfig('VATNumberRequired');

    // ------------

  }

  getAddress(): void {
    this.postalCodeService.getAddress(this.order.InvoicePerson.PostalCode, this.order.InvoicePerson.AddressNumber)
      .then(address => {
        this.order.InvoicePerson.Address = address.Street;
        this.order.InvoicePerson.City = address.City;
      })
      .catch(() => {
        // Ignore Errors.
      });
  }

  createFullName(gender: string, initials: string, middleName: string, surname: string, includeTav: boolean): string {
    let fullName = includeTav ? 'T.a.v. ' : '';

    if (gender) {
      if (gender === 'M') {
        fullName += includeTav ? 'de heer ' : 'De heer ';
      } else {
        fullName += includeTav ? 'mevrouw ' : 'Mevrouw ';
      }
    }

    if (initials) {
      fullName += initials + ' ';
    }

    if (middleName) {
      fullName += middleName + ' ';
    }

    if (surname) {
      fullName += surname;
    }

    return fullName;
  }

  canDeactivate(): boolean {
    this.formDeactivationCheck = true;
    return this.form.valid;
  }
}
