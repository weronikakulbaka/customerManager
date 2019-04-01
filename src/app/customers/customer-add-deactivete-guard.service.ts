import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';


@Injectable({
  providedIn: 'root'
})
export class CustomerAddDeactiveteGuard implements CanDeactivate<CustomerAddComponent>{

  constructor() { }

  canDeactivate(component: CustomerAddComponent, currentRoute: import("@angular/router").ActivatedRouteSnapshot, currentState: import("@angular/router").RouterStateSnapshot, nextState?: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return !(component.name || component.age || component.type);
  }
  
}
