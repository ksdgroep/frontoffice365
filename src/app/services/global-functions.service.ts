import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Course } from '../bll/course';
import { Order } from '../bll/order';

@Injectable()
export class GlobalFunctionsService {

  appInitialized = false;
  returnUrl: string;
  courseTemplateId: number;
  regionId: string;

  private selectedCourse: Course;
  private order: Order;

  private updateSelectedCourseFunction = new Subject();
  private enableTabsFunction = new Subject();
  private studentsFunction = new Subject();

  updateSelectedCourse(selectedCourse: Course) {
    this.selectedCourse = selectedCourse;
    this.updateSelectedCourseFunction.next(selectedCourse);
  }

  selectedCourseUpdated(): Observable<Course> {
    return this.updateSelectedCourseFunction.asObservable();
  }

  enableTabs(tabCount: number) {
    this.enableTabsFunction.next(tabCount);
  }

  enabledTabsChanged(): Observable<number> {
    return this.enableTabsFunction.asObservable();
  }

  updateOrder(order: Order) {
    this.order = order;
  }

  updateStudentCount(count: number) {
    this.studentsFunction.next(count);
  }

  studentCountUpdated(): Observable<number> {
    return this.studentsFunction.asObservable();
  }

  getSelectedCourse(): Course {
    return this.selectedCourse;
  }

  getOrder(): Order {
    return this.order;
  }
}
