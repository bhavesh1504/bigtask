import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { userservice } from './services/user.services';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private userservice: userservice, private router: Router) {}

  canActivate() {
    if (!this.userservice.isUserLoggedIn()) {
      return true;
    } 
    this.router.navigate(['/dashboard'])
    return false
  }
}
