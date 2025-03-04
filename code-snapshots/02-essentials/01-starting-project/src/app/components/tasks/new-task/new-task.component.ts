import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData, Task } from '../task/task.model';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule], // Angular takes over <form> element to handle form submission
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  private tasksService = inject(TasksService)


  // not signals, Angular provided change mecha
  // taskName: string = '';
  // taskDesc: string = '';
  // taskDueDate: string = '';

  taskName = signal('');
  taskDesc = signal('');
  taskDueDate = signal('');

  @Output() isAddingTask = new EventEmitter<void>();

  close() {
    this.isAddingTask.emit();
  } 

  @Output() addTask = new EventEmitter<NewTaskData>();


  @Input({required: true}) userid !: string;

  onSubmit() {
    // this.addTask.emit({
    //   title: this.taskName(),
    //   summary: this.taskDesc(),
    //   dueDate: this.taskDueDate()
    // });
    this.tasksService.addTask({
      title: this.taskName(),
      summary: this.taskDesc(), 
      dueDate: this.taskDueDate()
    }, this.userid);

    this.isAddingTask.emit();
  }


}
