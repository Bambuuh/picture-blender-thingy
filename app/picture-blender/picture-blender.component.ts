import { Component, OnInit } from 'angular2/core';
import {NgSwitch, NgSwitchWhen, NgSwitchDefault} from 'angular2/common'

import { HashtagService } from '../hashtag.service';
import { TWEETS } from '../tweet';
import { CONTENT } from '../mock-content';
import { Content } from '../content';

import { InstagramComponent } from '../instagram/instagram.component';
import { TwitterComponent } from '../twitter/twitter.component';
import { FacebookComponent } from '../facebook/facebook.component';

@Component({
    selector: 'picture-blender',
    templateUrl: 'app/picture-blender/picture-blender.component.html',
    styleUrls: ['app/picture-blender/picture-blender.component.css'],
    directives: [
        InstagramComponent,
        TwitterComponent,
        FacebookComponent
    ],
    providers: [
        HashtagService
    ]
})

export class PictureBlenderComponent implements OnInit {
    
    content: Content[];
    currentContent: Content;
    index = 0;
    
    constructor(private _hashtagService: HashtagService) { }
    
    ngOnInit() {
        this._hashtagService.getContent()
            .then( data => {
                this.content = data;
                this.currentContent = this.content[this.index];
                this.index ++;
            });
       setInterval( () => { this.switchContent(); }, 5000);
    }
    
    isProvider(provider: string) {
        return this.currentContent !== undefined && this.currentContent.provider == provider;
    }
    
    switchContent() {
        this.currentContent = this.content[this.index];
        if(this.index + 1 < this.content.length) {
            this.index ++;
        } else {
            this.index = 0;
        }
    }
    
    getProfilePicture() {
        return this.currentContent.profilePicture;
    }
    
    getUserName() {
        return this.currentContent.userName;
    }
    
    getContent() {
        return this.currentContent.message || this.currentContent.photo;
    }
}