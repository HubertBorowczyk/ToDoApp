import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: {title: string, description: string};
  // @Output taskDeleted = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  deleteTodo(todo) {
    // this.todoList.splice(index, 1);
    console.log(todo.target);
  }

}
