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
  completedTasks: Task[] = [];
  uncompletedTasks: Task[] = [];

  

  addTask(): void {
    if (this.newTaskName.trim()) {
      const task: Task = {
        naziv: this.newTaskName,
        isCompleted: false,
        isEditing: false
      };
      this.tasks.push(task);
      this.newTaskName = '';
    }
  }

  markAsCompleted(task: Task) {
    task.isCompleted = true;
    this.completedTasks.push(task);
    this.tasks = this.tasks.filter(t => t !== task);
  }
  

  updateTask(task: Task, newText: string) {
    task.naziv = newText;
  }

  cancelEdit(task: Task) {
    task.isEditing = false;
  }
  
  
}
