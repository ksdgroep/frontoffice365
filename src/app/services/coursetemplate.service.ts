import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CourseTemplate } from '../bll/coursetemplate';
import {AppConfig} from '../app.config';
import { environment } from '../../environments/environment';

@Injectable()
export class CourseTemplateService {

  private courseTemplateApiUrl = this.config.getConfig('apiUrl') + '/v1' + (environment.usePortals ? '/Portals/' + this.config.getConfig('portalId') : '') + '/CourseTemplates';
  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'Authorization-ApiKey': this.config.getConfig('apiKey')
    });

  private static handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http,
              private config: AppConfig) {
  }

  public getCourseTemplates(): Promise<CourseTemplate[]> {
    return this.http.get(this.courseTemplateApiUrl, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as CourseTemplate[])
      .catch(CourseTemplateService.handleError);
  }
}
