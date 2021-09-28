import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerApiService } from '../customer-api.service';
import { User } from '../user';

@Component({
  selector: 'app-api-edit-user',
  templateUrl: './api-edit-user.component.html',
  styleUrls: ['./api-edit-user.component.css']
})
export class ApiEditUserComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private cs:CustomerApiService,private toastr:ToastrService) { }

  user:User = {userId:0,authToken:"",email:"",firstName:"",password:"",roleId:0}
  ngOnInit(): void {
      this.cs.getUser(this.activatedRoute.snapshot.params.userId).subscribe(resp=>{
          this.user = resp.data; 
      })
  }

  updateUser(){
    //call update api 
    this.toastr.success("Update done -- dummy","success");
  }
}
