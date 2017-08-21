import { Component} from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todoTitle = '';
  todoDescription = '';
  todoList: Array<Todo> = [];

  addTodo(e) {
    e.preventDefault();

    if (!this.todoTitle) {
      return;
    }
    const newTodo: Todo = {
        title: this.todoTitle,
        description: this.todoDescription
      };
    this.todoList.push(newTodo);
    this.todoTitle = '';
    this.todoDescription = '';
  }

  deleteTodo(index) {
    this.todoList.splice(index, 1);
  }
}
