import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { GlobalFunctionsService } from '../services/global-functions.service';
import { Order } from '../bll/order';
import { Course } from '../bll/course';

@Component({
    moduleId: module.id,
    selector: 'fo-confirmation',
    templateUrl: './confirmation.component.html'
})

export class ConfirmationComponent implements OnDestroy {

    subscription: Subscription;
    subscriptionCourse: Subscription;
    order: Order;
    course: Course;

    constructor(
        private globalFunctionsService: GlobalFunctionsService
    ) {
        this.subscription = this.globalFunctionsService.orderUpdated().subscribe(order => this.order = order);
        this.subscriptionCourse = this.globalFunctionsService.selectedCourseUpdated().subscribe(course => this.course = course);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.subscriptionCourse.unsubscribe();
    }
}
