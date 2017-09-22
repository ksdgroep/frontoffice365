import {Component} from '@angular/core';
import {GlobalFunctionsService} from '../services/global-functions.service';
import {AppConfig} from '../app.config';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  returnUrl: string;
  contactEmail: string;

  constructor(
    private globalFunctionsService: GlobalFunctionsService,
    private config: AppConfig) {

    this.returnUrl = this.globalFunctionsService.returnUrl;
    this.contactEmail = this.config.getConfig('contactEmail');
  }
}
