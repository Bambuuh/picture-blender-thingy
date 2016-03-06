System.register(['angular2/core', '../tweet'], function(exports_1, context_1) {
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
    var core_1, tweet_1;
    var PictureBlenderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_1_1) {
                tweet_1 = tweet_1_1;
            }],
        execute: function() {
            PictureBlenderComponent = (function () {
                function PictureBlenderComponent() {
                    this.content = {
                        tweets: tweet_1.TWEETS.statuses,
                    };
                    console.log(this.content);
                }
                PictureBlenderComponent = __decorate([
                    core_1.Component({
                        selector: 'picture-blender',
                        templateUrl: 'app/picture-blender/picture-blender.component.html',
                        styleUrls: ['app/picture-blender/picture-blender.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PictureBlenderComponent);
                return PictureBlenderComponent;
            }());
            exports_1("PictureBlenderComponent", PictureBlenderComponent);
        }
    }
});
//# sourceMappingURL=picture-blender.component.js.map