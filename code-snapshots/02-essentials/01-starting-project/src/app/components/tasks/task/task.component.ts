import { Component, EventEmitter, inject, input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../../../services/tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  task = input.required<Task>();

  private taskService = inject(TasksService);

  @Output() complete = new EventEmitter<string>();
  

  onCompleteTask() {
    console.log("Task completed");
    // this.complete.emit(this.task().id);
    this.taskService.completeTask(this.task().id);}
}
