import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private userApi:UserApiService,private router:Router,private ts:ToastrService) { }
  userId:number=-1   
  user:any 
  firstName : string = ""
  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params.userId 
    console.log("EDIT USER => ",this.userId);
    this.user = this.userApi.users.find(user=>user.userId == this.userId)
    console.log(this.user);
     
    this.firstName = this.user.firstName
  }


  updateUser(){
    this.user.firstName = this.firstName
    this.ts.success("User modified","success",{timeOut:3000})
    this.router.navigateByUrl("/home")
  }
}
