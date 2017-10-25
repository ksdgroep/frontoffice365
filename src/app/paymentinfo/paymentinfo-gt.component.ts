import { Component, OnInit } from '@angular/core';

import { CountryService } from '../services/country.service';
import { GlobalFunctionsService } from '../services/global-functions.service';
import { Router } from '@angular/router';
import { PostalCodeService } from '../services/postalcode.service';
import { AppConfig } from '../app.config';
import { PaymentinfoComponent } from './paymentinfo.component';

@Component({
  moduleId: module.id,
  selector: 'fo-paymentinfo',
  templateUrl: './paymentinfo-gt.component.html',
  providers: [CountryService, PostalCodeService]
})

export class PaymentinfoGtComponent extends PaymentinfoComponent implements OnInit {

  // GT Functions

  vatRequired: boolean;

  constructor (protected countryService: CountryService,
               protected globalFunctionsService: GlobalFunctionsService,
               protected postalCodeService: PostalCodeService,
               protected router: Router,
               protected config: AppConfig) {
    super(countryService, globalFunctionsService, postalCodeService, router, config);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.vatRequired = this.config.getConfig('VATNumberRequired');
  }
}
