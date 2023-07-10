import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  @Input() taskText: string;
  @Output() save: EventEmitter<string> = new EventEmitter<string>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  editedTaskText: string;

  ngOnInit() {
    this.editedTaskText = this.taskText;
  }

  saveEdit() {
    this.save.emit(this.editedTaskText);
  }

  cancelEdit() {
    this.cancel.emit();
  }
  
}
