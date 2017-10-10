import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Course } from '../bll/course';
import { GlobalFunctionsService } from '../services/global-functions.service';
import { environment } from '../../environments/environment';

export class ClientCheck {
    public static get ClientCode(): string {
      return environment.clientCode;
    }
  }

@Component({
    moduleId: module.id,
    selector: 'fo-basket',
    templateUrl: ClientCheck.ClientCode === 'gt'
    ? './basket.component.gt.html'
    : './basket.component.html',
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
