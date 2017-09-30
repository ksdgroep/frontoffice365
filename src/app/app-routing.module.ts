import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseselectionComponent } from './courseselection/courseselection.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { PaymentinfoComponent } from './paymentinfo/paymentinfo.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ErrorComponent } from './error/error.component';
import { RouteGuard } from './route.guard';
import { ValidationGuard } from './validation.guard';
import { ThanksComponent } from './thanks/thanks.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'students', canActivate: [RouteGuard], canDeactivate: [ValidationGuard], component: ContactinfoComponent},
  {path: 'payment', canActivate: [RouteGuard], canDeactivate: [ValidationGuard], component: PaymentinfoComponent},
  {path: 'confirm', canActivate: [RouteGuard], component: ConfirmationComponent},
  {path: 'thanks', component: ThanksComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'courses', component: CourseselectionComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
