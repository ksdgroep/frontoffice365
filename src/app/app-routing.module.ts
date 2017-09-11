import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CourseselectionComponent} from './courseselection/courseselection.component';
import {ContactinfoComponent} from './contactinfo/contactinfo.component';
import {PaymentinfoComponent} from './paymentinfo/paymentinfo.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
// import {ErrorComponent} from './error/error.component';
// import {ThanksComponent} from './thanks/thanks.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'course', pathMatch: 'full' },
  { path: 'students', component: ContactinfoComponent },
  { path: 'payment', component: PaymentinfoComponent },
  { path: 'confirm', component: ConfirmationComponent },
  // { path: 'finished', component: ThanksComponent },
  // { path: 'error', component: ErrorComponent },
  { path: 'course', component: CourseselectionComponent },
  { path: 'course/:id', component: CourseselectionComponent },
  { path: 'course/:id/:returnName', component: CourseselectionComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
