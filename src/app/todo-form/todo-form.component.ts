import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Todo} from '../todos/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoTitle = '';
  todoDescription = '';
  @Output() taskCreated = new EventEmitter <{title: string, description: string}>();

  constructor() { }

  ngOnInit() {
  }

  addTodo(e) {
    e.preventDefault();
    if (!this.todoTitle) {
      return;
    }
    this.taskCreated.emit({title: this.todoTitle, description: this.todoDescription});
  }
}
