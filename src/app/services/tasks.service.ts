import { Injectable, signal } from '@angular/core';
import { tasks } from '../mock-data';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  todos = tasks
  filteredTasks = signal<Task[]>(this.todos)

  constructor() { }


  getAllTasks(){
    this.filteredTasks.set(this.todos)
  }

  updateTask(todo: Task){
    const chosenTodoIndex = this.todos.findIndex((task: Task) => task.id == todo.id)
    this.todos.splice(chosenTodoIndex, 1)
    this.todos.splice(chosenTodoIndex, 0, todo)
  }

  addNewTask(todo: string){
    const newTask = {
      id : this.todos.length +1,
      task: todo,
      status: "incompleted",
      checked: false
    }

    this.todos.push(newTask)
  }

  deleteTodo(todo: Task){
    const taskIndex = this.todos.findIndex((task: Task) => task.id === todo.id)
    this.todos.splice(taskIndex, 1)
  }

  getCompletedTasks(){
    const completedTasks = this.todos.filter((task: Task) => task.status === "completed")
    this.filteredTasks.set(completedTasks)
  }

  getIncompletedTasks(){
    const incompletedTasks = this.todos.filter((task: Task) => task.status === "incompleted")
    this.filteredTasks.set(incompletedTasks)
  }
}
