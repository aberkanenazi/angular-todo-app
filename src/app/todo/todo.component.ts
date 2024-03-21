import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../types/todoTypes';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  imports: [FormsModule, CommonModule, TodoFormComponent, TodoListComponent],
})
export class TodoComponent {
  taskArray: Task[] = [];

  addTask(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['todo'].value,
      done: false,
    });
  }
  deleteTask(index: number) {
    this.taskArray.splice(index, 1);
  }

  toggleDone(index: number) {
    this.taskArray[index].done = !this.taskArray[index].done;
    console.log(this.taskArray);
  }
}
