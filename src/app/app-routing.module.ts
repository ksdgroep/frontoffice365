import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseselectionComponent } from './courseselection/courseselection.component';
import { CourseselectionGtComponent } from './courseselection/courseselection-gt.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { ContactinfoGtComponent } from './contactinfo/contactinfo-gt.component';
import { PaymentinfoComponent } from './paymentinfo/paymentinfo.component';
import { PaymentinfoGtComponent } from './paymentinfo/paymentinfo-gt.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ConfirmationGtComponent } from './confirmation/confirmation-gt.component';
import { ErrorComponent } from './error/error.component';
import { ErrorGtComponent } from './error/error-gt.component';
import { ThanksComponent } from './thanks/thanks.component';
import { ThanksGtComponent } from './thanks/thanks-gt.component';
import { RouteGuard } from './route.guard';
import { ValidationGuard } from './validation.guard';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'students', canActivate: [RouteGuard], canDeactivate: [ValidationGuard], component: ContactinfoComponent},
  {path: 'payment', canActivate: [RouteGuard], canDeactivate: [ValidationGuard], component: PaymentinfoComponent},
  {path: 'confirm', canActivate: [RouteGuard], component: ConfirmationComponent},
  {path: 'thanks', component: ThanksComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'courses', component: CourseselectionComponent}
];

const appGTRoutes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'students', canActivate: [RouteGuard], canDeactivate: [ValidationGuard], component: ContactinfoGtComponent},
  {path: 'payment', canActivate: [RouteGuard], canDeactivate: [ValidationGuard], component: PaymentinfoGtComponent},
  {path: 'confirm', canActivate: [RouteGuard], component: ConfirmationGtComponent},
  {path: 'thanks', component: ThanksGtComponent},
  {path: 'error', component: ErrorGtComponent},
  {path: 'courses', component: CourseselectionGtComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(environment.clientCode === 'gt' ? appGTRoutes : appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
