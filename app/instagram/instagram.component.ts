import { Component } from 'angular2/core';

@Component({
    selector: 'instagram',
   templateUrl: "app/instagram/instagram.component.html",
   styleUrls: [
       'app/instagram/instagram.component.css'
   ]
})

export class InstagramComponent {
    
    constructor() {}
    
    userName = "username";
    profilePicture = "https://pbs.twimg.com/profile_images/1743668158/Twitter_Profile_Pic__2__400x400.jpg";
    photo = "http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2013/08/158539421.jpg";
    
    getProfilePicture() {
        return this.profilePicture;
    }
    
    getUserName() {
        return this.userName;
    }
    
    getPhoto() {
        return this.photo;
    }
}