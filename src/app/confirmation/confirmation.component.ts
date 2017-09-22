import { Component, OnInit } from '@angular/core';

import { GlobalFunctionsService } from '../services/global-functions.service';
import { Order } from '../bll/order';
import { Course } from '../bll/course';

@Component({
  moduleId: module.id,
  selector: 'fo-confirmation',
  templateUrl: './confirmation.component.html'
})

export class ConfirmationComponent implements OnInit {

  order: Order;
  course: Course;

  constructor(private globalFunctionsService: GlobalFunctionsService) {}

  ngOnInit(): void {
    this.order = this.globalFunctionsService.getOrder();
    this.course = this.globalFunctionsService.getSelectedCourse();
  }
}
