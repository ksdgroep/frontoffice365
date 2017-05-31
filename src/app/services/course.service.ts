import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
import { Course } from '../bll/course';

@Injectable()
export class CourseService{
    constructor(private http: Http) { }

    private courseApiUrl = environment.apiUrl + '/v1/Courses';
    private courseTemplateApiUrl = environment.apiUrl + '/v1/CourseTemplates';
    private regionsApiUrl = environment.apiUrl + '/v1/Regions';
    private headers = new Headers(
        {
            'Content-Type': 'application/json',
            'Authorization-ApiKey': environment.apiKey
        });

    public getCourses(): Promise<Course[]> {
        return this.http.get(this.courseApiUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Course[])
            .catch(this.handleError);
    }

    public getCoursesByCourseTemplate(courseTemplateId: number): Promise<Course[]> {
        return this.http.get(this.courseTemplateApiUrl + '/' + courseTemplateId + '/Courses', { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Course[])
            .catch(this.handleError);
    }

    public getCoursesByCourseTemplateAndRegion(courseTemplateId: number, regionId: string): Promise<Course[]> {
        return this.http.get(this.courseTemplateApiUrl + '/' + courseTemplateId + '/Regions/' + regionId + '/Courses', { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Course[])
            .catch(this.handleError);
    }

    public getCoursesByRegion(regionId: string): Promise<Course[]> {
        return this.http.get(this.regionsApiUrl + '/' + regionId + '/Courses', { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Course[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error); // for demo purposes only
        
        return Promise.reject(error.message || error);
    }
}