import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerApiService } from '../customer-api.service';

@Component({
  selector: 'app-api-login',
  templateUrl: './api-login.component.html',
  styleUrls: ['./api-login.component.css']
})
export class ApiLoginComponent implements OnInit {

  constructor(private customerApi: CustomerApiService, private ts: ToastrService, private router: Router) { }

  title = "login"
  email: string = ""
  password: string = ""
  msg: string = ""
  num = 12345.12
  num2 = 1.1234567
  ngOnInit(): void {
  }

  authenticate() {
    let user = { email: this.email, password: this.password }
    this.customerApi.authenticate(user).subscribe(resp => {
      //  console.log(resp);
      if (resp.status == 200) {
        this.ts.success(resp.msg, "success", { timeOut: 3000 })
        if (resp.data.roleId == 2) {
          //user  
          localStorage.setItem("authToken", resp.data.authToken)
          sessionStorage.setItem("authToken", resp.data.authToken)
          this.router.navigateByUrl("/home2")

        } else if (resp.data.roleId == 1) {
          //admin 
        }

      } else {
        this.ts.error(resp.msg, "ERROR", { timeOut: 3000 })
      }
    }, err => {

    });

  }

}
