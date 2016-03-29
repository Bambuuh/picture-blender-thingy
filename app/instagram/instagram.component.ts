import { Component, Input } from 'angular2/core';

import { Content } from '../content';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
    selector: 'instagram',
    templateUrl: "app/instagram/instagram.component.html",
    styleUrls: ['app/instagram/instagram.component.css'],
    directives: [ UserInfoComponent ],
})

export class InstagramComponent {
    
    @Input() content: Content;
    constructor() {}
    
    getPhoto() {
        return this.content.photo;
    }
    
    getUserName() {
        return this.content.userName;
    }
    
    getProfilePicture() {
        return this.content.profilePicture;
    }
}