import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string=""
  password:string=""
  
  msg = ""
  constructor(private userApiService:UserApiService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }


  authenticate(){
    console.log(this.email);
    console.log(this.password);
    let valid = false
    for(let i=0;i<this.userApiService.users.length;i++){
        if(this.userApiService.users[i].email == this.email && this.userApiService.users[i].password == this.password){
            valid  = true 
        }
    }    
    
    if(!valid)
    {
      this.msg ="Invalid Credentials!!!!"
    }else{
      this.msg = "bingoo....."
      this.toastr.success("Bingooo","success",{timeOut:3000})
      this.router.navigateByUrl("/home")
    }
  }

}
