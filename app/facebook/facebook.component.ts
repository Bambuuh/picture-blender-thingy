import { Component } from 'angular2/core';

@Component({
    selector: 'facebook',
    templateUrl: `app/facebook/facebook.component.html`,
    styleUrls: ['./app/facebook/facebook.component.css'],
})

export class FacebookComponent {
    message = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus comm.";
    
    getMessage() {
        return this.message;
    }
}