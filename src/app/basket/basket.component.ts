import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Course } from '../bll/course';
import { GlobalFunctionsService } from '../services/global-functions.service';

@Component({
    moduleId: module.id,
    selector: 'fo-basket',
    templateUrl: './basket.component.html'
})

export class BasketComponent implements OnDestroy {

    subscription: Subscription;
    subscriptionStudentCount: Subscription;
    selectedCourse: Course;
    studentCount = 0;

    constructor(
        private globalFunctionsService: GlobalFunctionsService
    ) {
        this.subscription = this.globalFunctionsService.selectedCourseUpdated().subscribe(course => this.selectedCourse = course);
        this.subscriptionStudentCount = this.globalFunctionsService.studentCountUpdated().subscribe(count => this.studentCount = count);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscriptionStudentCount.unsubscribe();
    }
}
