import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class ValidationGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                targetState: RouterStateSnapshot) {

    if (targetState.url.startsWith('/courses')) {
      return true;
    } else if (currentState.url.startsWith('/payment') && targetState.url.startsWith('/students')) {
      return true;
    } else {
      return component.canDeactivate ? component.canDeactivate() : true;
    }
  }
}
