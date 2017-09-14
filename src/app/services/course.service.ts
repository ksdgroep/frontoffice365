import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Course } from '../bll/course';
import {AppConfig} from '../app.config';

@Injectable()
export class CourseService {


  private courseApiUrl = this.config.getConfig('apiUrl') + '/v1/Courses';
  private courseTemplateApiUrl = this.config.getConfig('apiUrl') + '/v1/CourseTemplates';
  private regionsApiUrl = this.config.getConfig('apiUrl') + '/v1/Regions';
  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'Authorization-ApiKey': this.config.getConfig('apiKey')
    });

  constructor(private http: Http,
              private config: AppConfig) {
  }

  public getCourse(id: string): Promise<Course>{
    return this.http.get(this.courseApiUrl + '/' + id, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Course)
      .catch(this.handleError);
  }

  public getCourses(): Promise<Course[]> {
    return this.http.get(this.courseApiUrl, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Course[])
      .catch(this.handleError);
  }

  public getCoursesByCourseTemplate(courseTemplateId: number): Promise<Course[]> {
    return this.http.get(this.courseTemplateApiUrl + '/' + courseTemplateId + '/Courses', {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Course[])
      .catch(this.handleError);
  }

  public getCoursesByCourseTemplateAndRegion(courseTemplateId: number, regionId: string): Promise<Course[]> {
    return this.http.get(this.courseTemplateApiUrl + '/' + courseTemplateId + '/Regions/' + regionId + '/Courses', {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Course[])
      .catch(this.handleError);
  }

  public getCoursesByRegion(regionId: string): Promise<Course[]> {
    return this.http.get(this.regionsApiUrl + '/' + regionId + '/Courses', {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Course[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
