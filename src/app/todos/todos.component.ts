import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todoList: Array<Todo> = [];

  onTaskCreated(todo: { title: string, description: string }) {
    this.todoList.push({
      title: todo.title,
      description: todo.description
    });
  }
}
