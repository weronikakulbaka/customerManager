import { Component, OnInit, Input, EventEmitter, Output, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Customer, CustomerType } from '../model';
import { CounterService } from 'src/app/core/counter.service';
import { MessageService } from 'src/app/core/message.service';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnDestroy, OnChanges {
 
  
  @Input() customer: Customer;
  @Output() shift = new EventEmitter<string>();
  counter: number = 0;
  nameColor: string = "blue";
  isActive: boolean = true;
  showPhoto: boolean = false;
  counterHandle: number;
 
  CustomerType = CustomerType;

  constructor(private counterService: CounterService, private messageService: MessageService) { }

  ngOnInit() {
    console.log('init');
    this.counterService.increase();
  }

  ngOnDestroy(){
    console.log('destroy');
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes.customer.firstChange){
    console.log(`change from ${changes.customer.previousValue.name} to ${changes.customer.currentValue.name}`);
    }
  }

  changeColor() {
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
    this.messageService.success('Udało się zmienić kolor!');
  }

  left(){
    this.shift.emit('left');
  }

  right(){
    this.shift.emit('right');
  }

}
