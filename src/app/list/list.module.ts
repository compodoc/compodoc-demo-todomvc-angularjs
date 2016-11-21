import { ListComponent } from './list.component';

export const ListModule = angular
    .module('app.list', [])
    .component('list', ListComponent)
    .name;
