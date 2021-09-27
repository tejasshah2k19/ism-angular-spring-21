import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  constructor(private httpClient:HttpClient) { }

  //save 

  //http://localhost:9999/saveuser => post 

  addUser(user:any):Observable<any>{
   return this.httpClient.post("http://localhost:9999/saveuser",user)
  }
  getAllUsers(){

  }

  deleteUser(){

  }   

}

