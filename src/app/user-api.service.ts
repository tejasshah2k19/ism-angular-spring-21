import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor() { 

    let u1 = {firstname:"1",email:"1",password:"1"}
    this.users.push(u1);
  }

  users:Array<any> = []
  
}
