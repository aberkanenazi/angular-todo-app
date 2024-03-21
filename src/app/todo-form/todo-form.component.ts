import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Task } from '../types/todoTypes';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  @Output() addTask = new EventEmitter<NgForm>();

  onAddTask(form: NgForm): void {
    this.addTask.emit(form);
  }
}
