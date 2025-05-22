import { Component, OnInit, signal } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';
import { Signal } from '@angular/core';  // Signal-Typ importieren
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$: Signal<Task[]> = signal([]);  // Signal wird im ngOnInit initialisiert
  newTaskText: string = '';

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasks$ = this.tasksService.filteredTasks; // Referenz auf das Signal im Service
    this.tasksService.getAllTasks();
  }

  addTask() {
    if (this.newTaskText.trim()) {
      this.tasksService.addNewTask(this.newTaskText.trim());
      this.newTaskText = '';
    }
  }

  toggleStatus(task: Task) {
    const updatedTask = { ...task };
    updatedTask.status = updatedTask.status === 'completed' ? 'incompleted' : 'completed';
    updatedTask.checked = !updatedTask.checked;
    this.tasksService.updateTask(updatedTask);
  }

  deleteTask(task: Task) {
    this.tasksService.deleteTodo(task);
  }

  showAll() {
    this.tasksService.getAllTasks();
  }

  showCompleted() {
    this.tasksService.getCompletedTasks();
  }

  showIncompleted() {
    this.tasksService.getIncompletedTasks();
  }
}

