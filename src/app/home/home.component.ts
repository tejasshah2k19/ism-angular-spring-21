import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userApi:UserApiService,private router:Router) { }
  users:Array<any> = []

  ngOnInit(): void {
    this.users = this.userApi.users 
  }


  deleteUser(userId:number){
    console.log("delete "+userId);
    let index = -1; 

    for(let i=0;i<this.userApi.users.length;i++){
      if(this.userApi.users[i].userId == userId){
        index = i;
        break 
      }
    }

     this.userApi.users.splice(index,1);

   }

   editUser(userId:number){
     //redirect edit user component --> form -> data fill 
    this.router.navigateByUrl("/edituser/"+userId)      

   }
}
