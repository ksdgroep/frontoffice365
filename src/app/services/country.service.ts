import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
import { Country } from '../bll/country';

@Injectable()
export class CountryService{
    constructor(private http: Http) { }

    private countryApiUrl = environment.apiUrl + '/v1/Countries';
    private headers = new Headers(
        {
            'Content-Type': 'application/json',
            'Authorization-ApiKey': environment.apiKey
        });

    public getCountries(): Promise<Country[]> {
         return this.http.get(this.countryApiUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Country[])
            .catch(this.handleError);
    }
        
    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error); // for demo purposes only
        
        return Promise.reject(error.message || error);
    }
}