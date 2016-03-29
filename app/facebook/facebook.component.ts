import { Component, Input } from 'angular2/core';

import { Content } from '../content';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
    selector: 'facebook',
    templateUrl: `app/facebook/facebook.component.html`,
    styleUrls: ['./app/facebook/facebook.component.css'],
    directives: [ UserInfoComponent ],
})

export class FacebookComponent {

    @Input() content:Content;    
    getMessage() {
        return this.content.message;
    }
}