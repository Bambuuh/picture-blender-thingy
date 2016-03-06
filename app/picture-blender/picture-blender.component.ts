import { Component } from 'angular2/core';

import { TWEETS } from '../tweet';

@Component({
    selector: 'picture-blender',
    templateUrl: 'app/picture-blender/picture-blender.component.html',
    styleUrls: ['app/picture-blender/picture-blender.component.css']
})

export class PictureBlenderComponent {
    
    constructor() {console.log(this.content)}
    
    content = {
        tweets: TWEETS.statuses,
    };
}