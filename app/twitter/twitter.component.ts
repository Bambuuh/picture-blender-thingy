import { Component, Input } from 'angular2/core';

import { Content } from '../content';

@Component({
    selector: 'twitter',
    templateUrl: 'app/twitter/twitter.component.html',
    styleUrls: ['./app/twitter/twitter.component.css']
})

export class TwitterComponent {
    
    @Input() content: Content;
    constructor() {}
    
    getMessage() {
        return this.content.message;
    }
    
}