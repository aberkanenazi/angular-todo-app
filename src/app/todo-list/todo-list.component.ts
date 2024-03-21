import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../types/todoTypes';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input()
  tasks: Task[] = [];
  @Output() deleteTask = new EventEmitter<number>();
  @Output() toggleDone = new EventEmitter<number>();

  onDeleteTask(index: number): void {
    this.deleteTask.emit(index);
  }

  onToggleDone(index: number): void {
    this.toggleDone.emit(index);
  }
}
