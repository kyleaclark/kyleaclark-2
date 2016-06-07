/// src/app/app.ts
import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated'; // TODO: replace with new router
import {FORM_PROVIDERS} from '@angular/common';

import '../style/app.scss';

import routes from 'app/routes';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', // <app></app>
    providers: [...FORM_PROVIDERS],
    directives: [...ROUTER_DIRECTIVES],
    pipes: [],
    styles: [require('./app.scss')],
    template: require('./app.html')
})

@RouteConfig(routes)

export class App {
}
