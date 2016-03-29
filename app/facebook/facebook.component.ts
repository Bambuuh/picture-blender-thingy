import { Component, Input } from 'angular2/core';

import { Content } from '../content';

@Component({
    selector: 'facebook',
    templateUrl: `app/facebook/facebook.component.html`,
    styleUrls: ['./app/facebook/facebook.component.css'],
})

export class FacebookComponent {

    @Input() content:Content;    
    getMessage() {
        return this.content.message;
    }
}