import { Component, input } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
 todo = input.required<Task>()

}
