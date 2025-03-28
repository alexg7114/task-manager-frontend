import { Injectable } from '@angular/core';
import { tasks } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  todos = tasks

  constructor() { }


  getAllTasks(){
    return this.todos
  }
}
