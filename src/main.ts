import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

console.info('FrontOffice 365 Version 2017.10.0');

platformBrowserDynamic().bootstrapModule(AppModule);
