import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Region } from '../bll/region';
import { AppConfig } from '../app.config';

@Injectable()
export class RegionService {


  private regionApiUrl = this.config.getConfig('apiUrl') + '/v1/Regions';
  private courseTemplateApiUrl = this.config.getConfig('apiUrl') + '/v1/CourseTemplates';
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

  public getRegions(courseTemplateId: number): Promise<Region[]> {

    if (!courseTemplateId) {
      return this.http.get(this.regionApiUrl, {headers: this.headers})
        .toPromise()
        .then(response => response.json() as Region[])
        .catch(RegionService.handleError);
    } else {
      return this.http.get(this.courseTemplateApiUrl + '/' + courseTemplateId + '/Regions', {headers: this.headers})
        .toPromise()
        .then(response => response.json() as Region[])
        .catch(RegionService.handleError);
    }
  }
}
