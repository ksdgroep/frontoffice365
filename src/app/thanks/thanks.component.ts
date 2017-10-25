import { Component } from '@angular/core';
import { GlobalFunctionsService } from '../services/global-functions.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
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
