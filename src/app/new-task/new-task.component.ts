import { Component, ElementRef, viewChild, inject } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  taskService = inject(TasksService)
  taskInput = viewChild<ElementRef<HTMLInputElement>>("taskInputField")


  addTask(){

    if(this.taskInput()!.nativeElement.value !== ""){
      this.taskService.addNewTask(this.taskInput()!.nativeElement.value)
    }else{
      return
    }
  }
}
