import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
import { Order } from '../bll/order';
import { ApiMessage } from '../bll/api-message';

@Injectable()
export class EnrolService {
    constructor(private http: Http) { }

    private enrolApiUrl = environment.apiUrl + '/v1/Enrol';
    private headers = new Headers(
        {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization-ApiKey': environment.apiKey
        });
    
    public create(order: Order): Promise<any> {
        return this.http.post(this.enrolApiUrl, JSON.stringify(order), { headers: this.headers })
            .toPromise()
            .then(res => res.status)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error); // for demo purposes only
        
        return Promise.reject(error.message || error);
    }
}