import { Routes } from '@angular/router';
import {AuthorComponent} from './author/author.component';
import {TodosComponent} from './todos/todos.component';

export const appRoutes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'author', component: AuthorComponent },
];
