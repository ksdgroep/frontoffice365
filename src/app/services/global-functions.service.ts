import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Course } from '../bll/course';
import { Order } from '../bll/order';

@Injectable()
export class GlobalFunctionsService {

    private updateSelectedCourseFunction = new Subject();
    private enableTabsFunction = new Subject();
    private activateTabFunction = new Subject();
    private orderFunction = new Subject();
    private studentsFunction = new Subject();
    
    updateSelectedCourse(selectedCourse: Course) {
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

    activateTab(tabName: string) {
        this.activateTabFunction.next(tabName);
    }

    activeTabChanged(): Observable<string> {
        return this.activateTabFunction.asObservable();
    }

    updateOrder(order: Order) {
        this.orderFunction.next(order);
    }

    orderUpdated(): Observable<Order> {
        return this.orderFunction.asObservable();
    }

    updateStudentCount(count: number) {
        this.studentsFunction.next(count);
    }

    studentCountUpdated(): Observable<number> {
        return this.studentsFunction.asObservable();
    }
}