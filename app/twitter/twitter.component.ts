import { Component } from 'angular2/core';

@Component({
    selector: 'twitter',
    templateUrl: 'app/twitter/twitter.component.html',
    styleUrls: ['./app/twitter/twitter.component.css']
})

export class TwitterComponent {
    constructor() {}
    
    message = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus comm.";
    
    getMessage() {
        return this.message;
    }
    
}