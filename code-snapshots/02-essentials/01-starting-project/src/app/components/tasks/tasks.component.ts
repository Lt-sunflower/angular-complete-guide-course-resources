import { Component, Input, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  tasks = [{
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },]

  isAddingTasks: boolean = false;

  @Input({required: true}) id !: string;
  name=input.required<string>();

  onAddTask(){
    console.log("Task added");
    // open a modal to add a new task

    this.isAddingTasks= !this.isAddingTasks;
    
  }

  get userTasks(){
    return this.tasks.filter(task => task.userId === this.id);
  }

  completeTask(taskId: string){
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  
}
