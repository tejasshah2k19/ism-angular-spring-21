import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HttpClientModule }  from "@angular/common/http";
import { ApiSignupComponent } from './api-signup/api-signup.component';
import { HeaderComponent } from './header/header.component';
import { ApiLoginComponent } from './api-login/api-login.component';
import { ApiHomeComponent } from './api-home/api-home.component';
import { ApiEditUserComponent } from './api-edit-user/api-edit-user.component';
import { ReactiveSignupFormComponent } from './reactive-signup-form/reactive-signup-form.component'

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    SignupComponent,
    AddComponent,
    HomeComponent,
    EditUserComponent,
    ApiSignupComponent,
    HeaderComponent,
    ApiLoginComponent,
    ApiHomeComponent,
    ApiEditUserComponent,
    ReactiveSignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
     
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
