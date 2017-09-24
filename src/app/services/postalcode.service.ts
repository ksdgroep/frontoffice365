import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AppConfig } from '../app.config';
import { Address } from '../bll/address';

@Injectable()
export class PostalCodeService {

  private apiUrl = this.config.getConfig('postalCodeApiUrl') + '/v2/Address';
  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'Authorization-ApiKey': this.config.getConfig('postalCodeApiKey')
    });

  private static handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http,
              private config: AppConfig) {
  }

  public getAddress(postalCode: string, addressNumber: string): Promise<Address> {

    // Validate PostalCode
    if ( !postalCode || postalCode === '' || !postalCode.match(/\d+\s\w{2}/) ) {
      return Promise.reject('Invalid PostalCode.');
    }

    // Validate Number
    if ( !addressNumber || addressNumber === '' ) {
      return Promise.reject('No number given.');
    } else {
      const numberValue = addressNumber.match(/\d+/);
      if ( !numberValue ) {
        return Promise.reject('Invalid number.');
      }
      addressNumber = numberValue[0];
    }

    const params: URLSearchParams = new URLSearchParams();
    params.set('postalcode', postalCode);
    params.set('addressNumber', addressNumber);

    return this.http.get(this.apiUrl, {headers: this.headers, search: params})
      .toPromise()
      .then(response => response.json() as Address)
      .catch(PostalCodeService.handleError);
  }
}
