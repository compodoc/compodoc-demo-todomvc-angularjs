import { TodoStore } from './services/todo.store';
import { EmitterService } from './services/emitter.service';

export const SharedModule = angular
    .module('app.shared', [])
    .service('TodoStore', TodoStore)
    .service('EmitterService', EmitterService)
    .name;
