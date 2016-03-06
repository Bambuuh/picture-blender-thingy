import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { SetupComponent } from './setup-social-media/setup.component';
import { PictureBlenderComponent } from './picture-blender/picture-blender.component';

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    providers: [ ROUTER_PROVIDERS ]
})

@RouteConfig([
    {
        path: '/setup',
        name: 'Setup',
        component: SetupComponent,
        useAsDefault: true
    },
    {
        path: '/blender',
        name: 'Blender',
        component: PictureBlenderComponent
    }
])

export class AppComponent { }