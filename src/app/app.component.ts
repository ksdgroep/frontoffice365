import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { environment } from '../environments/environment';
import { GlobalFunctionsService } from './services/global-functions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GlobalFunctionsService]
})

export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  subscriptionActiveTab: Subscription;
  enabledTabCount: number = 1;
  selectedTab: string = 'courseSelect'; // TODO: Reset to 'courseSelect'; (contactInfo, paymentInfo, signupConfirmed)
  providerContactMail: string;
  errors: boolean = false;

  constructor(
    private globalFunctionsService: GlobalFunctionsService
  ) {
    this.subscription = this.globalFunctionsService.enabledTabsChanged().subscribe(enabledTabCount => this.enabledTabCount = enabledTabCount);
    this.subscriptionActiveTab = this.globalFunctionsService.activeTabChanged().subscribe(activeTab => this.selectTab(activeTab));
  }

  selectTab(selectedTab: string): void {
    // let tabIndex = 0;
    // switch (selectedTab) {
    //   case 'courseSelect':
    //     tabIndex = 1;
    //     break;
    //   case 'contactInfo':
    //     tabIndex = 2;
    //     break;
    //   case 'paymentInfo':
    //     tabIndex = 3;
    //     break;
    //   case 'signupConfirmed':
    //     this.errors = false;
    //     tabIndex = 4;
    //     break;
    //   case 'signupFailed':
    //     this.errors = true;
    //     tabIndex = 4;
    //     break;
    // }
    //
    // if ((tabIndex <= this.enabledTabCount && this.enabledTabCount != 4) || (tabIndex == 4 && this.enabledTabCount == 4)) {
    //   this.selectedTab = selectedTab;
    // }

    // Jump to top of page on tab-switch.
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.providerContactMail = environment.contactEmail;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionActiveTab.unsubscribe();
  }
}
