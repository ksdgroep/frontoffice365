import { Component } from '@angular/core';

import { CountryService } from '../services/country.service';
import { PostalCodeService } from '../services/postalcode.service';
import { ContactinfoComponent } from './contactinfo.component';

@Component({
  moduleId: module.id,
  selector: 'fo-contactinfo',
  templateUrl: './contactinfo-ev.component.html',
  providers: [CountryService, PostalCodeService]
})

export class ContactinfoEvComponent extends ContactinfoComponent{

}
