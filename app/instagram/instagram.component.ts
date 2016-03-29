import { Component, Input } from 'angular2/core';

import { Content } from '../content';

@Component({
    selector: 'instagram',
    templateUrl: "app/instagram/instagram.component.html",
    styleUrls: [
        'app/instagram/instagram.component.css'
   ]
})

export class InstagramComponent {
    
    @Input() content: Content;
    constructor() {}
    
    getPhoto() {
        return this.content.photo;
    }
}