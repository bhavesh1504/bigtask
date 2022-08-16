import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userservice } from './services/user.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'bigtask';
  // token!:any
  // isToken!:boolean
  constructor(private _router: Router, private user: userservice) {}
 
  ngOnInit(){
    
  }


  IsUserLoggedOut(){
    return this.user.IsUserLoggedOut();
  }

  
  authSignOut() {
    localStorage.removeItem('userDetails');
    console.log('logout');
    this._router.navigate(['/login']);
  }
}

