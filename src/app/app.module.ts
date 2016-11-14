import { AppComponent } from './app.component';

export const appModule = angular
    .module('app', [])
    .component('app', AppComponent)
    .name;
