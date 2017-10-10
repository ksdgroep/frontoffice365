import {Component} from '@angular/core';
import {GlobalFunctionsService} from '../services/global-functions.service';
import {AppConfig} from '../app.config';
import { environment } from '../../environments/environment';

export class ClientCheck {
  public static get ClientCode(): string {
    return environment.clientCode;
  }
}

@Component({
  selector: 'app-error',
  templateUrl: ClientCheck.ClientCode === 'gt'
  ? './error.component.gt.html'
  : './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  returnUrl: string;
  errorMessage: string;

  constructor(private globalFunctionsService: GlobalFunctionsService,
              private config: AppConfig) {
    this.returnUrl = this.globalFunctionsService.returnUrl;
    this.errorMessage = this.config.getConfig('errorMessage');
    this.globalFunctionsService.showBasket(false);
    this.globalFunctionsService.showTabs(false);
  }
}
