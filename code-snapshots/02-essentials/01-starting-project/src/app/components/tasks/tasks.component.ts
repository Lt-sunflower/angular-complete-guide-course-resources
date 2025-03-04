import { Component, Input, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { TasksService } from '../../services/tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  constructor(private tasksService: TasksService){}

  isAddingTasks: boolean = false;

  @Input({required: true}) id !: string;
  name=input.required<string>();

  onAddTask(){
    console.log("Task added");
    // open a modal to add a new task

    this.isAddingTasks= true;
    
  }

  get userTasks(){
    return this.tasksService.getUserTasks(this.id);
  }

  completeTask(taskId: string){
    this.tasksService.completeTask(taskId);
  }

  closeDialog(){
    this.isAddingTasks = false;
  }

  addTask(task: NewTaskData){

    this.tasksService.addTask(task, this.id);

    this.isAddingTasks = false;

  }
  
}
