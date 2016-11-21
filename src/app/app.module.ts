import { AppComponent } from './app.component';

import { HeaderModule } from './header/';

import { HomeModule } from './home/';
import { AboutModule } from './about/';
import { ListModule } from './list/';

import { SharedModule } from './shared/';

import { AppRouting } from './app.routing';

export const AppModule = angular
    .module('app', [
        'ui.router',
        HeaderModule,
        HomeModule,
        ListModule,
        AboutModule,
        SharedModule
    ])
    .component('appRoot', AppComponent)
    .config(AppRouting)
    .name;
