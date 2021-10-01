import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  constructor(private httpClient: HttpClient) { }

  //save 

  //http://localhost:9999/saveuser => post 


  addUser(user: any): Observable<any> {
   let authToken =  localStorage.getItem("authToken")
   console.log(authToken);
    
   return this.httpClient.post(environment.apiUrl+"saveuser", user)
  }

  authenticate(user:any):Observable<any>{
    return this.httpClient.post("http://localhost:9999/authenticate",user)
  }
  getAllUsers():Promise<any> {
    return this.httpClient.get(environment.apiUrl+"users").toPromise()
  }

  deleteUser(userId:number):Observable<any> {
    return this.httpClient.delete(environment.apiUrl+"users/"+userId)
  }

  getUser(userId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"users/"+userId)
  }

  updateUser(user:User):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"users",user)
  }
}

