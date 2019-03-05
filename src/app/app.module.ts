import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './material'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import {EmployeeComponent} from './employee/employee.component';
import { ProductComponent } from './products/product.component';
import {PageNotFoundComponent} from './others/pageNotFound.component';
import { ProductModule } from './products/product.module';
import {PayDay} from './Offer/payday';
import {Giveaway} from './Offer/giveaway';
import {HomeLiving} from './Offer/homeliving';
import {ShoeListComponent} from './products/shoe-list.component';
import {ShoeDetailComponent} from './products/shoe-detail.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselConfig } from './carousel-config';
import {NgbdDropdownBasic} from './dropdown.component';



@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        NgbModule,
        BrowserAnimationsModule,
        CustomMaterialModule,
        MDBBootstrapModule.forRoot(),
        ProductModule
          
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        EmployeeComponent,
        NgbdCarouselConfig,
        ProductComponent,
        PageNotFoundComponent,
        NgbdDropdownBasic,
        PayDay,
        Giveaway,
        HomeLiving,
        ShoeDetailComponent,
        ShoeListComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }