import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { GlobalFunctionsService } from './services/global-functions.service';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/css/style.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  subscriptionActiveTab: Subscription;
  subscriptionShowBasket: Subscription;
  subscriptionShowTabs: Subscription;
  enabledTabCount = 1;
  showBasket = true;
  showTabs = true;

  constructor(
    private globalFunctionsService: GlobalFunctionsService,
    private router: Router
  ) {
    this.subscription = this.globalFunctionsService.enabledTabsChanged().subscribe(enabledTabCount => this.enabledTabCount = enabledTabCount);
    this.subscriptionShowBasket = this.globalFunctionsService.showBasketChanged().subscribe(showBasket => this.showBasket = showBasket);
    this.subscriptionShowTabs = this.globalFunctionsService.showTabsChanged().subscribe(showTabs => this.showTabs = showTabs);
  }

  ngOnInit(): void {
    this.router.events.subscribe(route => {
      if (route instanceof RoutesRecognized) {
        // Get ReturnUrl
        const returnUrl = route.state.root.firstChild.queryParams['returnurl'];
        if (returnUrl != null) {
          this.globalFunctionsService.returnUrl = returnUrl;
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionActiveTab.unsubscribe();
    this.subscriptionShowBasket.unsubscribe();
  }

  selectTab(): void {
    // Jump to top of page on tab-switch.
    window.scrollTo(0, 0);
  }
}
