import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( public http :HttpClient) { }

  getUser(data:any){

   return  this.http.get("http://localhost:3000/posts",data)
  }
}