import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Country } from '../bll/country';
import {AppConfig} from '../app.config';

@Injectable()
export class CountryService {

  private countryApiUrl = this.config.getConfig('apiUrl') + '/v1/Countries';
  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'Authorization-ApiKey': this.config.getConfig('apiKey')
    });

  constructor(private http: Http,
              private config: AppConfig) {
  }

  public getCountries(): Promise<Country[]> {

    return this.http.get(this.countryApiUrl, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Country[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
