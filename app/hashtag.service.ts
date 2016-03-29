import { Injectable, OnInit } from 'angular2/core';

import { Content } from './content';

@Injectable()

export class HashtagService {
    
    content: Content[] = [
        {
            provider: "twitter",
            userName: "twitterUser",
            profilePicture: "http://zblogged.com/wp-content/uploads/2015/11/5.png",
            message: "FACEBOOK Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
        },
        {
            provider: "facebook",
            message: "TWITTER Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
            userName: "facebookUser",
            profilePicture: "https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg",
        },
        {
            provider: "instagram",
            photo: "http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2013/08/158539421.jpg",
            userName: "instagramUser",
            profilePicture: "https://pbs.twimg.com/profile_images/1743668158/Twitter_Profile_Pic__2__400x400.jpg",
        }
    ];
    
    constructor() {}
    
    ngOnInit() {
        
    }
    
    
    
    getContent() {
        return Promise.resolve(this.content);
    }
}