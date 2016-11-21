import { TodoStore } from './services/todo.store';

export const SharedModule = angular
    .module('app.shared', [])
    .service('TodoStore', TodoStore)
    .name;
