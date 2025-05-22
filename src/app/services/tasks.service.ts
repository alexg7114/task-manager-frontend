import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  filteredTasks = signal<Task[]>([]);
  private apiUrl = 'http://localhost:8000/Tasks/';

  constructor(private http: HttpClient) {}

  getAllTasks(): void {
    this.http.get<Task[]>(this.apiUrl).subscribe(tasks => {
      this.filteredTasks.set(tasks);
    });
  }

  addNewTask(taskText: string): void {
    const newTask: Task = {
      task: taskText,
      status: 'incompleted',
      checked: false,
    };

    this.http.post<Task>(this.apiUrl, newTask).subscribe(() => {
      this.getAllTasks();
    });
  }

  updateTask(task: Task): void {
    this.http.put(`${this.apiUrl}${task.id}/`, task).subscribe(() => {
      this.getAllTasks();
    });
  }

  deleteTodo(task: Task): void {
    this.http.delete(`${this.apiUrl}${task.id}/`).subscribe(() => {
      this.getAllTasks();
    });
  }

  getCompletedTasks(): void {
    const completed = this.filteredTasks().filter(task => task.status === 'completed');
    this.filteredTasks.set(completed);
  }

  getIncompletedTasks(): void {
    const incompleted = this.filteredTasks().filter(task => task.status === 'incompleted');
    this.filteredTasks.set(incompleted);
  }
}

