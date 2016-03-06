import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { LoginComponent } from '../login-component/login.component'

@Component ({
    selector: 'social-media-setup',
    templateUrl: 'app/setup-social-media/setup.component.html',
    styleUrls: ['app/setup-social-media/setup.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        LoginComponent
        ]
})

export class SetupComponent {
    hashtag : string;
    
    hasValidHashtag(hashtag: string): boolean {
        return hashtag !== undefined && hashtag.length > 0;
    }
}