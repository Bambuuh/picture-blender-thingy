System.register(['angular2/core', '../hashtag.service', '../instagram/instagram.component', '../twitter/twitter.component', '../facebook/facebook.component'], function(exports_1, context_1) {
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
    var core_1, hashtag_service_1, instagram_component_1, twitter_component_1, facebook_component_1;
    var PictureBlenderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hashtag_service_1_1) {
                hashtag_service_1 = hashtag_service_1_1;
            },
            function (instagram_component_1_1) {
                instagram_component_1 = instagram_component_1_1;
            },
            function (twitter_component_1_1) {
                twitter_component_1 = twitter_component_1_1;
            },
            function (facebook_component_1_1) {
                facebook_component_1 = facebook_component_1_1;
            }],
        execute: function() {
            PictureBlenderComponent = (function () {
                function PictureBlenderComponent(_hashtagService) {
                    this._hashtagService = _hashtagService;
                    this.content = [];
                    this.index = 0;
                    this.userName = "username";
                    this.profilePicture = "https://pbs.twimg.com/profile_images/1743668158/Twitter_Profile_Pic__2__400x400.jpg";
                    this.photo = "http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2013/08/158539421.jpg";
                }
                PictureBlenderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._hashtagService.getContent()
                        .then(function (data) {
                        _this.content = data;
                        _this.currentContent = _this.content[_this.index];
                        _this.index++;
                    });
                    setInterval(function () { _this.switchContent(); }, 5000);
                };
                PictureBlenderComponent.prototype.isProvider = function (provider) {
                    return this.currentContent !== undefined && this.currentContent.provider == provider;
                };
                PictureBlenderComponent.prototype.switchContent = function () {
                    this.currentContent = this.content[this.index];
                    if (this.index + 1 < this.content.length) {
                        this.index++;
                    }
                    else {
                        this.index = 0;
                    }
                };
                PictureBlenderComponent.prototype.getProfilePicture = function () {
                    return this.profilePicture;
                };
                PictureBlenderComponent.prototype.getUserName = function () {
                    return this.userName;
                };
                PictureBlenderComponent.prototype.getPhoto = function () {
                    return this.photo;
                };
                PictureBlenderComponent = __decorate([
                    core_1.Component({
                        selector: 'picture-blender',
                        templateUrl: 'app/picture-blender/picture-blender.component.html',
                        styleUrls: ['app/picture-blender/picture-blender.component.css'],
                        directives: [
                            instagram_component_1.InstagramComponent,
                            twitter_component_1.TwitterComponent,
                            facebook_component_1.FacebookComponent
                        ],
                        providers: [
                            hashtag_service_1.HashtagService
                        ]
                    }), 
                    __metadata('design:paramtypes', [hashtag_service_1.HashtagService])
                ], PictureBlenderComponent);
                return PictureBlenderComponent;
            }());
            exports_1("PictureBlenderComponent", PictureBlenderComponent);
        }
    }
});
//# sourceMappingURL=picture-blender.component.js.map