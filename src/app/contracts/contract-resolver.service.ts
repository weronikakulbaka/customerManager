import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Contract } from './model';
import { ContractService } from './contract.service';

@Injectable({
  providedIn: 'root'
})
export class ContractResolver implements Resolve<Contract>{

  constructor(
    private contractService: ContractService
  ) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Contract | import("rxjs").Observable<Contract> | Promise<Contract> {
    const id = parseInt(route.params['id']);
    return this.contractService.getContract(id);
  }

  
}
