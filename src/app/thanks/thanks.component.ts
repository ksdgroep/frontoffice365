import { Component } from '@angular/core';
import { GlobalFunctionsService } from '../services/global-functions.service';
import { environment } from '../../environments/environment';

export class ClientCheck {
  public static get ClientCode(): string {
    return environment.clientCode;
  }
}

@Component({
  selector: 'app-thanks',
  templateUrl: ClientCheck.ClientCode === 'gt'
  ? './thanks.component.gt.html'
  : './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent {

  returnUrl: string;

  constructor(private globalFunctionsService: GlobalFunctionsService) {
    this.globalFunctionsService.showBasket(false);
    this.globalFunctionsService.showTabs(false);
    this.returnUrl = this.globalFunctionsService.returnUrl;
  }
}
