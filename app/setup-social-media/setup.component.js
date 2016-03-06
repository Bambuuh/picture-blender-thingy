System.register(['angular2/core', 'angular2/router', '../login-component/login.component'], function(exports_1, context_1) {
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
    var core_1, router_1, login_component_1;
    var SetupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            SetupComponent = (function () {
                function SetupComponent() {
                }
                SetupComponent.prototype.hasValidHashtag = function (hashtag) {
                    return hashtag !== undefined && hashtag.length > 0;
                };
                SetupComponent = __decorate([
                    core_1.Component({
                        selector: 'social-media-setup',
                        templateUrl: 'app/setup-social-media/setup.component.html',
                        styleUrls: ['app/setup-social-media/setup.component.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            login_component_1.LoginComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SetupComponent);
                return SetupComponent;
            }());
            exports_1("SetupComponent", SetupComponent);
        }
    }
});
//# sourceMappingURL=setup.component.js.map