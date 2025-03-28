import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-task-list',
  imports: [
    TaskComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

}
