import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CurrencyFormat } from './helpers/currencyformat';
import { DutchDateFormat } from './helpers/dutchdateformat';
import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ConfirmationGtComponent } from './confirmation/confirmation-gt.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { CourseselectionComponent } from './courseselection/courseselection.component';
import { CourseselectionGtComponent } from './courseselection/courseselection-gt.component';
import { PaymentinfoComponent } from './paymentinfo/paymentinfo.component';
import { ValidationErrorDirective } from './directives/validation-error.directive';
import { SharedModule } from './shared/shared.module';
import { PluralizeText } from './helpers/pluralizetext-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppConfig } from './app.config';
import { ErrorComponent } from './error/error.component';
import { RouteGuard } from './route.guard';
import { GlobalFunctionsService } from './services/global-functions.service';
import { ValidationGuard } from './validation.guard';
import { ThanksComponent } from './thanks/thanks.component';
import { BasketGtComponent } from './basket/basket-gt.component';
import { ContactinfoGtComponent } from './contactinfo/contactinfo-gt.component';
import { ErrorGtComponent } from './error/error-gt.component';
import { PaymentinfoGtComponent } from './paymentinfo/paymentinfo-gt.component';
import { ThanksGtComponent } from './thanks/thanks-gt.component';
import { AppGtComponent } from './app-gt.component';
import { environment } from '../environments/environment';

export function initConfig(config: AppConfig) {
  return () => config.load();
}

@NgModule({
  declarations: [
    CurrencyFormat,
    DutchDateFormat,
    PluralizeText,
    AppComponent,
    AppGtComponent,
    ValidationErrorDirective,
    BasketComponent,
    BasketGtComponent,
    ConfirmationComponent,
    ConfirmationGtComponent,
    ContactinfoComponent,
    ContactinfoGtComponent,
    CourseselectionComponent,
    CourseselectionGtComponent,
    PaymentinfoComponent,
    PaymentinfoGtComponent,
    ErrorComponent,
    ErrorGtComponent,
    ThanksComponent,
    ThanksGtComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    GlobalFunctionsService,
    RouteGuard,
    ValidationGuard,
    AppConfig,
    {
      provide: APP_INITIALIZER, useFactory: initConfig, deps: [AppConfig], multi: true
    }
  ],
  bootstrap: [environment.clientCode === 'gt' ? AppGtComponent : AppComponent]
})
export class AppModule {
}
