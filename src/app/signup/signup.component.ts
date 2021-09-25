import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  firstName: string = "shivay"
  email: string
  password: string
  isVisible: boolean = false

  users: Array<any> = []

  constructor(private userApiService:UserApiService) {
    console.log("Constructor()");
    this.email = ""
    this.password = ""
  }

  ngOnInit(): void {
    console.log("init()");
  }


  printInfo() {
    //save 
    let user = { firstName: this.firstName, email: this.email, password: this.password }
    this.userApiService.users.push(user);
    
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);
    this.isVisible = true
    console.log("=>",this.userApiService.users);
    
  }
  //


  //

  //

  //


}
