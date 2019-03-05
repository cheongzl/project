import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import {EmployeeComponent} from './employee/employee.component';
import { ProductComponent } from './products/product.component';
import {PageNotFoundComponent} from './others/pageNotFound.component'
import {PayDay} from './Offer/payday';
import {ShoeListComponent} from './products/shoe-list.component';
import {ShoeDetailComponent} from './products/shoe-detail.component'

const appRoutes: Routes =
[
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'employee', component: EmployeeComponent},
    {path: 'payday', component: PayDay},
    {path: 'productdetails', component: ProductComponent},
    {path: "shoes", component: ShoeListComponent},
    {path: "shoe/:id", component: ShoeDetailComponent},

    // otherwise redirect to home
    {path: '**', component: PageNotFoundComponent},
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

