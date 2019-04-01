import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, CustomerType } from '../model';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs';
import { CounterService } from 'src/app/core/counter.service';
import { MessageService } from 'src/app/core/message.service';


@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./customer-browser.component.css']
})
export class CustomerBrowserComponent implements OnInit {
  @ViewChild('details') detailsComponent: CustomerDetailsComponent;
  
  customers: Customer[];
  //customers$: Observable<Customer[]>;
  customer: Customer

  constructor(private customerService: CustomerService, private counterService: CounterService, private messageService: MessageService) { 
  }

  ngOnInit() {
    this.refresh();
    this.counterService.increase();
  }

  deleteCustomer(){
    this.customerService.deleteCustomer(this.customer).subscribe(() => {
      this.messageService.success("Udało się usunąć klienta");
      this.refresh();
    });
  }

  changeColor(){
    this.detailsComponent.changeColor();
  }

  onShift(direction: string){
    const idx = this.customers.indexOf(this.customer);
    if(idx > 0 && direction === "left") {
      this.customer = this.customers[idx - 1];
    }
    else if (idx < this.customers.length - 1 && direction === "right"){
      this.customer = this.customers[idx + 1];
    }
  }

  private refresh(){
    // this.customer = null;
    // this.customers$ = this.customerService.getCustomers();
    this.customerService.getCustomers().subscribe( response => {
      this.customers = response;
      this.customer = this.customers[0];
    });
  }

}
