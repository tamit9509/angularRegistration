import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer.model';
import { Observable } from 'rxjs';



@Injectable()
export class HttpService {
        constructor(private httpClient: HttpClient) { }

        addCustomer(data: Customer) {
                return this.httpClient.post("http://localhost:8080/customer", data);
        }
        getCustomersList() {
                return this.httpClient.get("http://localhost:8080/customerList");
        }
}