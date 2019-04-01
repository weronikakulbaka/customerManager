import { Component, OnInit } from '@angular/core';
import { CustomerType } from '../model';
import { CustomerService } from '../customer.service';
import { MessageService } from 'src/app/core/message.service';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css'],
})
export class CustomerAddComponent implements OnInit {
 
  name: string;
  age: number;
  type: CustomerType;

  CustomerType = CustomerType;

  constructor(private customerService: CustomerService, private messageService: MessageService) { }

  ngOnInit() {
    
  }
 
  add(form: NgForm){
    this.customerService.createCustomer({
      name: this.name,
      age: this.age,
      type: this.type,
      photoUrl:'',
      categories: [],
      description: '',
      address: {
        city: '',
        houseNumber: 0,
        street: ''
      }
    }).subscribe(() => {
      this.messageService.success("Udało się dodać klienta");
      form.resetForm();
    });
  }

}
