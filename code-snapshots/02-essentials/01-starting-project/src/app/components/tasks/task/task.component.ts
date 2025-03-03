import { Component, EventEmitter, input, Output } from '@angular/core';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  task = input.required<Task>();

  @Output() complete = new EventEmitter<string>();
  

  onCompleteTask() {
    console.log("Task completed");
    this.complete.emit(this.task().id);
  }
}
