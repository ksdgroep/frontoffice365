import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Course } from '../bll/course';
import { Order } from '../bll/order';
import { GlobalFunctionsService } from '../services/global-functions.service';

@Component({
    moduleId: module.id,
    selector: 'fo-basket',
    templateUrl: './basket.component.html'
})

export class BasketComponent implements OnDestroy {

    constructor(
        private globalFunctionsService: GlobalFunctionsService
    ) {
        this.subscription = this.globalFunctionsService.selectedCourseUpdated().subscribe(course => this.selectedCourse = course);
        this.subscriptionStudentCount = this.globalFunctionsService.studentCountUpdated().subscribe(count => this.studentCount = count);
    }

    subscription: Subscription;
    subscriptionOrder: Subscription;
    subscriptionStudentCount: Subscription;
    selectedCourse: Course;
    studentCount: number = 0;
        
    updateCourseInfo(course: Course) {
        this.selectedCourse = course;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscriptionStudentCount.unsubscribe();
    }
}