import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor() { 

    let u1 = {userId:1,firstName:"1",email:"1",password:"1"}
    let u2 = {userId:2,firstName:"ram",email:"ram@gmail.com",password:"ram"}
    let u3 = {userId:3,firstName:"shyam",email:"shyam@gmail.com",password:"shyam"}
    let u4 = {userId:4,firstName:"ravan",email:"ravan",password:"ravan"}
    let u5 = {userId:5,firstName:"sita",email:"sita",password:"sita"}
    
    this.users.push(u1);
    this.users.push(u2);
    this.users.push(u3);
    this.users.push(u4);
    this.users.push(u5);
  

  }

  users:Array<any> = []
  
}
