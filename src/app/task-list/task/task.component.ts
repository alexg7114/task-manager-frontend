import { Component, EventEmitter, input, output } from '@angular/core';
import { Task } from '../../models/task';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [
    NgClass
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
 todo = input.required<Task>()
 toggleTaskEmitter = output()
 deleteTodoEmitter = output()


  toggleStatus(){
    this.todo().checked = !this.todo().checked
    this.todo().checked ? this.todo().status = "completed" : this.todo().status = "incompleted"
    this.toggleTaskEmitter.emit()
  }

  deleteTodo(){
    this.deleteTodoEmitter.emit()
  }

}
