import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CourseselectionComponent} from './courseselection/courseselection.component';
import {ContactinfoComponent} from './contactinfo/contactinfo.component';
import {PaymentinfoComponent} from './paymentinfo/paymentinfo.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {ErrorComponent} from './error/error.component';
import { RouteGuard } from './route.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'students', canActivate: [RouteGuard], component: ContactinfoComponent },
  { path: 'payment', canActivate: [RouteGuard], component: PaymentinfoComponent },
  { path: 'confirm', canActivate: [RouteGuard], component: ConfirmationComponent },
  { path: 'error', canActivate: [RouteGuard], component: ErrorComponent },
  { path: 'courses', component: CourseselectionComponent },
  // { path: 'courses/:id', component: CourseselectionComponent },
  // { path: 'courses/:id/:courseId', component: CourseselectionComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
