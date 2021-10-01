import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ApiEditUserComponent } from './api-edit-user/api-edit-user.component';
import { ApiHomeComponent } from './api-home/api-home.component';
import { ApiLoginComponent } from './api-login/api-login.component';
import { ApiSignupComponent } from './api-signup/api-signup.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveSignupFormComponent } from './reactive-signup-form/reactive-signup-form.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "add", component: AddComponent },
  { path: "home", component: HomeComponent },
  { path: "edituser/:userId", component: EditUserComponent },
  { path: "signup2", component: ApiSignupComponent },
  { path: "login2", component: ApiLoginComponent },
  { path: "home2", component: ApiHomeComponent },
  { path: "edituser2/:userId", component: ApiEditUserComponent },
  { path: "reactive-signup",component:ReactiveSignupFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
