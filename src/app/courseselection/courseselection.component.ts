import { Component, OnInit } from '@angular/core';

import { CourseTemplate } from '../bll/coursetemplate';
import { CourseTemplateService } from '../services/coursetemplate.service';
import { Region } from '../bll/region';
import { RegionService } from '../services/region.service';
import { Course } from '../bll/course';
import { CourseService } from '../services/course.service';
import { GlobalFunctionsService } from '../services/global-functions.service';

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
    selectedCourseId: number;

    constructor(
    private courseTemplateService: CourseTemplateService,
    private regionService: RegionService,
    private courseService: CourseService,
    private globalFunctionsService: GlobalFunctionsService
 ) { }

  getCourseTemplates(): void {
    this.courseTemplateService.getCourseTemplates().then(courseTemplates => this.courseTemplates = courseTemplates);
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

  getCourses(courseTemplateId: number, regionId: string): void {
    if (courseTemplateId == null && regionId == null) {
        this.courseService.getCourses().then(courses => this.courses = courses);
    } else if (regionId == null) {
        this.courseService.getCoursesByCourseTemplate(courseTemplateId).then(courses => this.courses = courses);
    } else if (courseTemplateId == null) {
        this.courseService.getCoursesByRegion(regionId).then(courses => this.courses = courses);
    } else {
        this.courseService.getCoursesByCourseTemplateAndRegion(courseTemplateId, regionId).then(courses => this.courses = courses);
    }
  }

  selectedCourseTemplateChanged(courseTemplate: CourseTemplate): void {
    if (courseTemplate.Id !== undefined) {
      this.regionService.getRegionsByCourseTemplate(courseTemplate.Id).then(regions => this.regions = regions);
      this.getCourses(courseTemplate.Id, this.selectedRegion ? this.selectedRegion.Id : null);
    } else {
      this.getRegions();
      this.getCourses(null, this.selectedRegion ? this.selectedRegion.Id : null);
    }
  }

  selectedRegionChanged(region: Region): void {
    if (region.Id !== undefined) {
      this.getCourses(this.selectedCourseTemplate ? this.selectedCourseTemplate.Id : null, region.Id);
    } else {
      this.getCourses(this.selectedCourseTemplate ? this.selectedCourseTemplate.Id : null, null);
    }
  }

  selectedCourseChanged(course: Course): void {
      this.selectedCourseId = course.Id;

      this.globalFunctionsService.updateSelectedCourse(course);
      this.globalFunctionsService.enableTabs(2);
  }

  nextTab(): void {
      this.globalFunctionsService.activateTab('contactInfo');
  }

  ngOnInit(): void {
    this.selectedCourseTemplate = null;
    this.selectedRegion = null;

    this.getCourseTemplates();
    this.getRegions();
    this.getCourses(null, null);
  }
}
