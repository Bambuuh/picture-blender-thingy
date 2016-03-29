System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HashtagService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HashtagService = (function () {
                function HashtagService() {
                    this.content = [
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
                }
                HashtagService.prototype.ngOnInit = function () {
                };
                HashtagService.prototype.getContent = function () {
                    return Promise.resolve(this.content);
                };
                HashtagService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HashtagService);
                return HashtagService;
            }());
            exports_1("HashtagService", HashtagService);
        }
    }
});
//# sourceMappingURL=hashtag.service.js.map