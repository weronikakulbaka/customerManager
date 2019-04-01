import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerService } from './customer.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth-guard.service';
import { CustomerAddDeactiveteGuard } from './customer-add-deactivete-guard.service';

const routes = [
  {path: 'customers', component: CustomerBrowserComponent},
  {path: 'customers/add', component: CustomerAddComponent, canActivate: [AuthGuard], canDeactivate: [CustomerAddDeactiveteGuard]}
];

@NgModule({
  declarations: [
    CustomerAddComponent,
    CustomerBrowserComponent, CustomerDetailsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CustomerService,
    CustomerAddDeactiveteGuard
  ],
  exports: [
    CustomerAddComponent,
    CustomerBrowserComponent
  ]
})
export class CustomersModule { }
