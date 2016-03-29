import { Component } from 'angular2/core';

@Component({
    selector: 'facebook',
    templateUrl: `app/facebook/facebook.component.html`,
    styleUrls: ['./app/facebook/facebook.component.css'],
})

export class FacebookComponent {
    displayName = "username";
    atName = "@username";
    message = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus comm.";
    profilePicture = "https://pbs.twimg.com/profile_images/1743668158/Twitter_Profile_Pic__2__400x400.jpg";
    
    getUserName() {
        return this.displayName;    
    }
    
    getAtName() {
        return this.atName;
    }
    
    getMessage() {
        return this.message;
    }
    
    getProfilePicture() {
        return this.profilePicture;
    }
}