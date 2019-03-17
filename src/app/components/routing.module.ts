import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [
        { path: "", redirectTo: "customers", pathMatch: "full" },
        { path: "customers", component: CustomerListComponent },
        { path: "customers-details", component: CustomerDetailsComponent },
        { path: "customer-create", component: CustomerCreateComponent },
        { path: "customer-update", component: CustomerUpdateComponent },
]
@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class RoutingModule {

}