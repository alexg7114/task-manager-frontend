import { Component, inject } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task-list',
  imports: [
    TaskComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  todos = inject(TasksService).getAllTasks()

  constructor(){}

}
