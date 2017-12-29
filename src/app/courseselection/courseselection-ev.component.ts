import { Component } from '@angular/core';

import { CourseTemplateService } from '../services/coursetemplate.service';
import { RegionService } from '../services/region.service';
import { Course } from '../bll/course';
import { CourseService } from '../services/course.service';
import { CourseselectionComponent } from './courseselection.component';

@Component({
  moduleId: module.id,
  selector: 'fo-courseselection',
  templateUrl: './courseselection-ev.component.html',
  providers: [CourseTemplateService, RegionService, CourseService]
})
export class CourseselectionEvComponent extends CourseselectionComponent{

  // GT Functions

  getCourse(course: Course) {
    if (course.Id !== undefined) {
      this.selectedCourse = course;
      this.courses = [course];
    } else {
      this.getCourses(this.selectedCourseTemplate ? this.selectedCourseTemplate.Id : null, this.selectedRegion ? this.selectedRegion.Id : null);
    }
  }
}
