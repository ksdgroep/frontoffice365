import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CourseselectionComponent} from './courseselection/courseselection.component';
import {ContactinfoComponent} from './contactinfo/contactinfo.component';
import {PaymentinfoComponent} from './paymentinfo/paymentinfo.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {ErrorComponent} from './error/error.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'students', component: ContactinfoComponent },
  { path: 'payment', component: PaymentinfoComponent },
  { path: 'confirm', component: ConfirmationComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'courses', component: CourseselectionComponent },
  { path: 'courses/:id', component: CourseselectionComponent },
  { path: 'courses/:id/:courseId', component: CourseselectionComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
