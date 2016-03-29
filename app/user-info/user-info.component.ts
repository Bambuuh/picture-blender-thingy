import { Component, Input } from 'angular2/core';

import { Content } from '../content';

@Component({
    selector: 'user-info',
    templateUrl: 'app/user-info/user-info.component.html',
    styleUrls: ['./app/user-info/user-info.component.css'],
})

export class UserInfoComponent {
    @Input() content: Content;
    
    getProfilePicture() {
        return this.content.profilePicture;
    }
    
   getUserName() {
       return this.content.userName;
   }
}