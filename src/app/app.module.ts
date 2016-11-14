import { AppComponent } from './app.component';

import { HeaderModule } from './header/';

import { HomeModule } from './home/';
import { AboutModule } from './about/';

import { AppRouting } from './app.routing';

export const AppModule = angular
    .module('app', [
        'ui.router',
        HeaderModule,
        HomeModule,
        AboutModule
    ])
    .component('appRoot', AppComponent)
    .config(AppRouting)
    .name;
