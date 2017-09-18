import { Component, OnInit } from '@angular/core';

import { CourseTemplate } from '../bll/coursetemplate';
import { CourseTemplateService } from '../services/coursetemplate.service';
import { Region } from '../bll/region';
import { RegionService } from '../services/region.service';
import { Course } from '../bll/course';
import { CourseService } from '../services/course.service';
import { GlobalFunctionsService } from '../services/global-functions.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'fo-courseselection',
    templateUrl: './courseselection.component.html',
    providers: [CourseTemplateService, RegionService, CourseService]
})

export class CourseselectionComponent implements OnInit {

  selectedCourseTemplate: CourseTemplate;
  courseTemplates: CourseTemplate[];
  selectedRegion: Region;
  regions: Region[];
  courses: Course[];
  selectedCourse: Course;
  showMobileInfo: number;

  constructor(private courseTemplateService: CourseTemplateService,
              private regionService: RegionService,
              private courseService: CourseService,
              private globalFunctionsService: GlobalFunctionsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  getCourseTemplates(): void {
    this.courseTemplateService.getCourseTemplates().then(courseTemplates => this.setCourseTemplate(courseTemplates));
  }

  setCourseTemplate(courseTemplates: CourseTemplate[]): void {
    this.courseTemplates = courseTemplates;

    let courseTemplateId = this.route.snapshot.params['id'];
    if (courseTemplateId == null) {
      courseTemplateId = this.globalFunctionsService.courseTemplateId;
    } else {
      console.log('coursetemplate not null');
      this.globalFunctionsService.courseTemplateId = courseTemplateId;
    }

    if (this.courseTemplates) {
      const templateIndex = this.courseTemplates.findIndex(template => template.Id === courseTemplateId).toString();
      console.log(templateIndex);
      this.selectedCourseTemplate = this.courseTemplates[templateIndex];
    }
  }

  getRegions(): void {
    this.regionService.getRegions().then(regions => this.setRegion(regions));
  }

  setRegion(regions: Region[]): void {
    this.regions = regions;

    if (this.regions && this.selectedRegion) {
      const regionIndex = this.regions.findIndex(region => region.Id === this.selectedRegion.Id).toString();
      this.selectedRegion = regions[regionIndex];
    }
  }

  setRegionByName(regionName: string): void {
    if (this.regions) {
      const regionIndex = this.regions.findIndex(region => region.Name === regionName).toString();
      this.selectedRegion = this.regions[regionIndex];
    }
  }

  getCourses(courseTemplateId: number, regionId: string): void {
    if (courseTemplateId == null && regionId == null) {
      this.courseService.getCourses().then(courses => {
        this.courses = courses;
        this.resetCourseSelection();
      });
    } else if (regionId == null) {
      this.courseService.getCoursesByCourseTemplate(courseTemplateId).then(courses => {
        this.courses = courses;
        this.resetCourseSelection();
      });
    } else if (courseTemplateId == null) {
      this.courseService.getCoursesByRegion(regionId).then(courses => {
        this.courses = courses;
        this.resetCourseSelection();
      });
    } else {
      this.courseService.getCoursesByCourseTemplateAndRegion(courseTemplateId, regionId).then(courses => {
        this.courses = courses;
        this.resetCourseSelection();
      });
    }
  }

  resetCourseSelection(): void {
    // Reset Selection if course not in filter
    if (!this.courses || (this.selectedCourse && this.courses.findIndex(course => course.Id === this.selectedCourse.Id) === -1)) {
      this.selectedCourse = null;
      this.globalFunctionsService.updateSelectedCourse(null);
    }
  }

  selectedCourseTemplateChanged(courseTemplate: CourseTemplate): void {
    // Update Storage
    this.globalFunctionsService.courseTemplateId = courseTemplate.Id;

    if (courseTemplate.Id !== undefined) {
      this.regionService.getRegionsByCourseTemplate(courseTemplate.Id).then(regions => this.regions = regions);
      this.getCourses(courseTemplate.Id, this.selectedRegion ? this.selectedRegion.Id : null);
    } else {
      this.getRegions();
      this.getCourses(null, this.selectedRegion ? this.selectedRegion.Id : null);
    }
  }

  selectedRegionChanged(region: Region): void {
    // Update Storage
    this.globalFunctionsService.regionId = region.Id;

    if (region.Id !== undefined) {
      this.getCourses(this.selectedCourseTemplate ? this.selectedCourseTemplate.Id : null, region.Id);
    } else {
      this.getCourses(this.selectedCourseTemplate ? this.selectedCourseTemplate.Id : null, null);
    }
  }

  selectedCourseChanged(course: Course): void {
    this.selectedCourse = course;

    this.globalFunctionsService.updateSelectedCourse(course);
    this.globalFunctionsService.enableTabs(2);
  }

  nextTab(): void {

    if (this.selectedCourse.IsFull) {
      // Block Enrolment
      return;
    }

    this.globalFunctionsService.activateTab('contactInfo');

    // Redirect
    // TODO: Animate
    window.scrollTo(0, 0);
    this.router.navigate(['students']);
  }

  ngOnInit(): void {
    this.selectedCourseTemplate = null;
    this.selectedRegion = null;

    this.getCourseTemplates();
    this.getRegions();

    let courseTemplateId = this.route.snapshot.params['id'];
    if (courseTemplateId == null) {
      courseTemplateId = this.globalFunctionsService.courseTemplateId;
    }

    let courseId = this.route.snapshot.params['courseId'];
    if (courseId == null) {
      const selectedCourse = this.globalFunctionsService.getSelectedCourse();
      if (selectedCourse) {
        courseId = selectedCourse.Id;
      }
    }

    if (courseId) {
      // Get Course
      this.courseService.getCourse(courseId).then(course => {
        // Get Region
        this.setRegionByName(course.Region);

        this.selectedCourse = course;

        this.selectedCourseChanged(course);
      });
    }

    this.getCourses(courseTemplateId, this.selectedRegion ? this.selectedRegion.Id : null);
  }

  displayMobileInfo(index: number, ignore: boolean) {
    if (ignore) {
      return;
    }

    if (this.showMobileInfo === index) {
      this.showMobileInfo = null;
    } else {
      this.showMobileInfo = index;
    }
  }
}
