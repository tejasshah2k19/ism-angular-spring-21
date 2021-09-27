import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../customer-api.service';
import { User } from '../user';

@Component({
  selector: 'app-api-signup',
  templateUrl: './api-signup.component.html',
  styleUrls: ['./api-signup.component.css']
})
export class ApiSignupComponent implements OnInit {

  constructor(private customerApiService:CustomerApiService) { }
  user:User= {userId:0,firstName:"",email:"",password:"",authToken:"",roleId:2}
  
  ngOnInit(): void {
  }

  saveUser(){
    console.log(this.user);
    // rest api call 
    // services     
    this.customerApiService.addUser(this.user).subscribe(resp=>{
      console.log(resp);
    });
    
  }
}
