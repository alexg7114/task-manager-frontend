import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FilterControlsComponent } from './filter-controls/filter-controls.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskListComponent } from './task-list/task-list.component';
//import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    NavigationComponent,
    FilterControlsComponent,
    NewTaskComponent,
    TaskListComponent,
    //BrowserModule,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myTasks';
}

