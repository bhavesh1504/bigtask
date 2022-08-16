import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {LoginService} from './login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router, private service : LoginService) {

   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/posts/").
    subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Successfull");
        localStorage.setItem('userDetails', "userFound")
        this.loginForm.reset();
        this.router.navigate(['dashboard']);

      }else{
        alert("User not found!");

      }
     },err=>{
      alert("Something went wrong!")
    
    })

  }

}
