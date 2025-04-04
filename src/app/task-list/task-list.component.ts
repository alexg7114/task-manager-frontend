import { Component, inject } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

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
  todoService = inject(TasksService)

  constructor(){}

  updateTask(todo: Task){
    this.todoService.updateTask(todo)
  }


  deleteTodo(todo : Task){
    this.todoService.deleteTodo(todo)
  }
}
