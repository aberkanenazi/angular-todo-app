import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
export const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'todo-form', component: TodoFormComponent },
  { path: 'todo-list', component: TodoListComponent },
];
