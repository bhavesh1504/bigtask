import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public signupForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    public service: RegisterService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]]
    });
  }

  signUp() {
    console.log('in');
    this.service.postUser(this.signupForm.value).subscribe(
      res => {
        alert("Register successfull");
        this.signupForm.reset();
        this.router.navigate(['login']);
      },
      err => {
        alert("Something went wrong");
      }
    );
  }
}
