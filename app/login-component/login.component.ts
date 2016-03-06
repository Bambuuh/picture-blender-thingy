import { Component, Input } from 'angular2/core';

@Component({
    selector: 'login',
    templateUrl: 'app/login-component/login.component.html',
    styleUrls: ['app/login-component/login.component.css']
})

export class LoginComponent {
    
    @Input('social-media') socialMedia: string;
    
    loggedIn = false;
    
    status() {
        return this.loggedIn ? "loggedIn" : "loggedOut";        
    }
    
    getPrettifiedMedia() {
         return this.socialMedia.charAt(0).toUpperCase() + this.socialMedia.slice(1);
    }
    
    toggleLogin() {
        this.loggedIn = !this.loggedIn;
    }
    
    logIn() {
        this.loggedIn = true;
    }
    
    logOut() {
       this.loggedIn = false; 
    }
}