import { Injectable } from "@angular/core";
    
@Injectable({
    providedIn: 'root'
})
export class userservice {
    constructor(){}
        isUserLoggedIn(){
           return !!localStorage.getItem('userDetails')
        }

        IsUserLoggedOut(){
            return localStorage.getItem('userDetails')
        }
        
    }
