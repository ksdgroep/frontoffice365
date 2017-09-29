import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { environment } from '../environments/environment';
import { GlobalFunctionsService } from './services/global-functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  subscriptionActiveTab: Subscription;
  enabledTabCount = 1;
  providerContactMail: string;

  constructor(
    private globalFunctionsService: GlobalFunctionsService,
    private router: Router
  ) {
    this.subscription = this.globalFunctionsService.enabledTabsChanged().subscribe(enabledTabCount => this.enabledTabCount = enabledTabCount);
  }

  ngOnInit(): void {
    this.providerContactMail = environment.contactEmail;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionActiveTab.unsubscribe();
  }

  selectTab(): void {
    // Jump to top of page on tab-switch.
    window.scrollTo(0, 0);
  }
}
