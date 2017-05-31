import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
import { CourseTemplate } from '../bll/coursetemplate';

@Injectable()
export class CourseTemplateService {
    constructor(private http: Http) { }

    private courseTemplateApiUrl = environment.apiUrl + '/v1/CourseTemplates';
    private headers = new Headers(
        {
            'Content-Type': 'application/json',
            'Authorization-ApiKey': environment.apiKey
        });

    public getCourseTemplates(): Promise<CourseTemplate[]> {
        return this.http.get(this.courseTemplateApiUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as CourseTemplate[])
            .catch(this.handleError);
    }
        
    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error); // for demo purposes only
        
        return Promise.reject(error.message || error);
    }
}