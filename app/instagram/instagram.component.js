System.register(['angular2/core', '../user-info/user-info.component'], function(exports_1, context_1) {
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
    var core_1, user_info_component_1;
    var InstagramComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_info_component_1_1) {
                user_info_component_1 = user_info_component_1_1;
            }],
        execute: function() {
            InstagramComponent = (function () {
                function InstagramComponent() {
                }
                InstagramComponent.prototype.getPhoto = function () {
                    return this.content.photo;
                };
                InstagramComponent.prototype.getUserName = function () {
                    return this.content.userName;
                };
                InstagramComponent.prototype.getProfilePicture = function () {
                    return this.content.profilePicture;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], InstagramComponent.prototype, "content", void 0);
                InstagramComponent = __decorate([
                    core_1.Component({
                        selector: 'instagram',
                        templateUrl: "app/instagram/instagram.component.html",
                        styleUrls: ['app/instagram/instagram.component.css'],
                        directives: [user_info_component_1.UserInfoComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], InstagramComponent);
                return InstagramComponent;
            }());
            exports_1("InstagramComponent", InstagramComponent);
        }
    }
});
//# sourceMappingURL=instagram.component.js.map