import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../share/httpService.service';
import { Customer } from '../share/customer.model';
@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  errors = {
    required: "This field is required!",
    validEmail: "Enter valid email!",
    validAge: "Age should be between 18-80!",
    validPassword: "Password length should be between then 6 to 12!"
  }
  @ViewChild('userData') userData;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }
  onSubmit(f) {
    console.log(this.userData);

    this.httpService.addCustomer(new Customer(2,
      this.userData.value.name,
      this.userData.value.email,
      this.userData.value.age,
      this.userData.value.psw)
    ).subscribe(response => {
      console.log(response);

    })

  }
}
