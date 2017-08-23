import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AuthorComponent} from './author/author.component';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthorComponent,
    TodosComponent,
    TodoFormComponent,
    TodoItemComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
