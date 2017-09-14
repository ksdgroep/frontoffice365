import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Order } from '../bll/order';
import {AppConfig} from '../app.config';

@Injectable()
export class EnrolService {


  private enrolApiUrl = this.config.getConfig('apiUrl') + '/v1/Enrol';
  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization-ApiKey': this.config.getConfig('apiKey')
    });

  constructor(private http: Http,
              private config: AppConfig) {
  }

  public create(order: Order): Promise<any> {
    return this.http.post(this.enrolApiUrl, JSON.stringify(order), {headers: this.headers})
      .toPromise()
      .then(res => res.status)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
