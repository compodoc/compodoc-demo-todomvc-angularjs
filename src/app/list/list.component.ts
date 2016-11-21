import { TodoStore } from '../shared/services/todo.store';
import { Todo } from '../shared/models/todo.model';

export const ListComponent = {
    template: require('./list.component.html'),
    controller: class ListComponent {
        /**
         * Local reference of TodoStore
         */
        todoStore: TodoStore;

        todos: Array<Todo>;

        constructor(TodoStore: TodoStore) {
            'ngInject';
    		this.todoStore = TodoStore;
            this.todos = TodoStore.getAll();
    	}
    }
};
