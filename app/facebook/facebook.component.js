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
    var FacebookComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FacebookComponent = (function () {
                function FacebookComponent() {
                    this.displayName = "username";
                    this.atName = "@username";
                    this.message = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus comm.";
                    this.profilePicture = "https://pbs.twimg.com/profile_images/1743668158/Twitter_Profile_Pic__2__400x400.jpg";
                }
                FacebookComponent.prototype.getUserName = function () {
                    return this.displayName;
                };
                FacebookComponent.prototype.getAtName = function () {
                    return this.atName;
                };
                FacebookComponent.prototype.getMessage = function () {
                    return this.message;
                };
                FacebookComponent.prototype.getProfilePicture = function () {
                    return this.profilePicture;
                };
                FacebookComponent = __decorate([
                    core_1.Component({
                        selector: 'facebook',
                        templateUrl: "app/facebook/facebook.component.html",
                        styleUrls: ['./app/facebook/facebook.component.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], FacebookComponent);
                return FacebookComponent;
            }());
            exports_1("FacebookComponent", FacebookComponent);
        }
    }
});
//# sourceMappingURL=facebook.component.js.map