import { Component, OnInit } from '@angular/core';
import { HttpService } from '../share/httpService.service';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: {}[] = [];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getCustomersList().subscribe(
      customerlist => {
        this.customers = customerlist["data"].customerList;
        console.log(this.customers[0]);

      },
      error => {
        console.log(error);
      },
      () => {
        console.log('Completed!');

      }
    );
  }

}
