import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CurrencyFormat } from './helpers/currencyformat';
import { DutchDateFormat } from './helpers/dutchdateformat';
import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { CourseselectionComponent } from './courseselection/courseselection.component';
import { PaymentinfoComponent } from './paymentinfo/paymentinfo.component';
import { ValidationErrorDirective } from './directives/validation-error.directive';
import {SharedModule} from './shared/shared.module';
import {PluralizeText} from './helpers/pluralizetext-pipe';
import {AppRoutingModule} from './app-routing.module';
import {AppConfig} from './app.config';
import { ErrorComponent } from './error/error.component';

export function initConfig(config: AppConfig){
  return () => config.load();
}

@NgModule({
  declarations: [
    CurrencyFormat,
    DutchDateFormat,
    PluralizeText,
    AppComponent,
    BasketComponent,
    ConfirmationComponent,
    ContactinfoComponent,
    CourseselectionComponent,
    PaymentinfoComponent,
    ValidationErrorDirective,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER, useFactory: initConfig, deps: [AppConfig], multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
