import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
import { Region } from '../bll/region';

@Injectable()
export class RegionService{
    constructor(private http: Http) { }

    private regionApiUrl = environment.apiUrl + '/v1/Regions';
    private courseTemplateApiUrl = environment.apiUrl + '/v1/CourseTemplates';
    private headers = new Headers(
        {
            'Content-Type': 'application/json',
            'Authorization-ApiKey': environment.apiKey
        });

    public getRegions(): Promise<Region[]> {
         return this.http.get(this.regionApiUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Region[])
            .catch(this.handleError);
    }

    public getRegionsByCourseTemplate(courseTemplateId: number): Promise<Region[]> {
        return this.http.get(this.courseTemplateApiUrl + '/' + courseTemplateId + '/Regions', { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Region[])
            .catch(this.handleError);
    }
        
    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error); // for demo purposes only
        
        return Promise.reject(error.message || error);
    }
}