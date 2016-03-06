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
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent() {
                    this.loggedIn = false;
                }
                LoginComponent.prototype.status = function () {
                    return this.loggedIn ? "loggedIn" : "loggedOut";
                };
                LoginComponent.prototype.getIcon = function () {
                    return this.loggedIn ? "fa-sign-out" : "fa-sign-in";
                };
                LoginComponent.prototype.getPrettifiedMedia = function () {
                    return this.socialMedia.charAt(0).toUpperCase() + this.socialMedia.slice(1);
                };
                LoginComponent.prototype.toggleLogin = function () {
                    this.loggedIn = !this.loggedIn;
                };
                LoginComponent.prototype.logIn = function () {
                    this.loggedIn = true;
                };
                LoginComponent.prototype.logOut = function () {
                    this.loggedIn = false;
                };
                __decorate([
                    core_1.Input('social-media'), 
                    __metadata('design:type', String)
                ], LoginComponent.prototype, "socialMedia", void 0);
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/login-component/login.component.html',
                        styleUrls: ['app/login-component/login.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map