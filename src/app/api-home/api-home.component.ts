import { Component, OnInit } from '@angular/core';

import { CustomerApiService } from '../customer-api.service';
import { User } from '../user';

@Component({
  selector: 'app-api-home',
  templateUrl: './api-home.component.html',
  styleUrls: ['./api-home.component.css']
})
export class ApiHomeComponent implements OnInit {

  constructor(private customerApi: CustomerApiService) { }
  users: Array<User> = []
  ngOnInit(): void {
    this.loadAllUsers()
  }


  loadAllUsers() {
    this.customerApi.getAllUsers().subscribe(resp => {
      console.log(resp);
      if (resp.data.length == 0) {
        //no content 
      } else {
        this.users = resp.data;
      }
    }, err => {

    })
  }


  deleteUser(userId: number) {
    this.customerApi.deleteUser(userId).subscribe(resp => {
      //F  let user = this.users.find(user=>user.userId == userId)

      let index = this.users.findIndex(user => user.userId == userId)
      console.log("deleted == >", index);

      //  let index = this.users.indexOf(user as User)
      this.users.splice(index, 1);
    })
  }


}
