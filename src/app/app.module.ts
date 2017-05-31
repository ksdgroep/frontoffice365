import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    CurrencyFormat,
    DutchDateFormat, 
    AppComponent, BasketComponent, ConfirmationComponent, ContactinfoComponent, CourseselectionComponent, PaymentinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
