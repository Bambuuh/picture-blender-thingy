import { Component } from 'angular2/core';

@Component({
    selector: 'twitter-view',
    templateUrl: 'app/twitter/twitter.component.html',
    styleUrls: ['./app/twitter/twitter.component.css']
})

export class TwitterComponent {
    constructor() {}
    
    displayName = "username";
    atName = "@username";
    message = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus comm.";
    
    getUserName() {
        return this.displayName;    
    }
    
    getAtName() {
        return this.atName;
    }
    
    getMessage() {
        return this.message;
    }
    
}