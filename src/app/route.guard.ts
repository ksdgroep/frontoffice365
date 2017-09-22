import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { GlobalFunctionsService } from './services/global-functions.service';

@Injectable()
export class RouteGuard implements CanActivate {
  constructor(private router: Router,
              private globalFunctionService: GlobalFunctionsService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.globalFunctionService.appInitialized) {
      return true;
    } else {
      this.router.navigate(['courses'], { queryParams: route.queryParams});
    }
  }
}
