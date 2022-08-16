import { Injectable } from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import { userservice } from "./user.services";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{
    constructor(private userservice : userservice, private router : Router){}
    
	
	canActivate() {

        if(this.userservice.isUserLoggedIn()){
            return true;
        }else{
            this.router.navigate(['login']);
            return false
        }
    }
 
}