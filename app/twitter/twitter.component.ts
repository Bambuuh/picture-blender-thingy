import { Component, Input } from 'angular2/core';

import { Content } from '../content';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
    selector: 'twitter',
    templateUrl: 'app/twitter/twitter.component.html',
    styleUrls: ['./app/twitter/twitter.component.css'],
    directives: [ UserInfoComponent ],
})

export class TwitterComponent {
    
    @Input() content: Content;
    constructor() {}
    
    getMessage() {
        return this.content.message;
    }
    
}