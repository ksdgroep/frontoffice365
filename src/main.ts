import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export class ClientCheck {
  public static get ClientCode(): string {
    return environment.clientCode;
  }
}

if (environment.production) {
  enableProdMode();
}

console.info('FrontOffice 365 Version 2017.9.3');

platformBrowserDynamic().bootstrapModule(AppModule);
