import { Component } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTaskName = '';

  addTask(): void {
    if (this.newTaskName.trim()) {
      const task: Task = {
        naziv: this.newTaskName,
        isCompleted: false
      };
      this.tasks.push(task);
      this.newTaskName = '';
    }
  }

  markAsCompleted(task: Task): void {
    task.isCompleted = true;
  }
}
