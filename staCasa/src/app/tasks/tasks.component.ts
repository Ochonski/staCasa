import { Component, ChangeDetectorRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

interface Task {
  id: number;
  title: string;
  detail: string;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  todoTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  doneTasks: Task[] = [];

  newTaskTitle: string = '';
  newTaskDetail: string = '';
  expandedTaskId: number | null = null;

  isEditMode: boolean = false;
  taskBeingEdited: Task | null = null;

  constructor(private cdRef: ChangeDetectorRef) {}

  toggleExpand(taskId: number) {
    this.expandedTaskId = this.expandedTaskId === taskId ? null : taskId;
  }

  editTask(task: Task) {
    this.newTaskTitle = task.title;
    this.newTaskDetail = task.detail;
    this.isEditMode = true;
    this.taskBeingEdited = task;
  }

  removeTask(taskId: number) {
    this.todoTasks = this.todoTasks.filter(task => task.id !== taskId);
    this.inProgressTasks = this.inProgressTasks.filter(task => task.id !== taskId);
    this.doneTasks = this.doneTasks.filter(task => task.id !== taskId);
  }

  addTask() {
    if (this.isEditMode) {
      if (this.taskBeingEdited) {
        this.taskBeingEdited.title = this.newTaskTitle;
        this.taskBeingEdited.detail = this.newTaskDetail;
      }
      this.resetForm();
    } else {
      const newTask: Task = {
        id: Date.now(),
        title: this.newTaskTitle,
        detail: this.newTaskDetail
      };
      this.todoTasks.push(newTask);
      this.resetForm();
    }
  }

  resetForm() {
    this.newTaskTitle = '';
    this.newTaskDetail = '';
    this.isEditMode = false;
    this.taskBeingEdited = null;
  }

  onTaskDropped(event: CdkDragDrop<Task[]>) {
    const previousContainer = event.previousContainer;
    const currentContainer = event.container;

    if (previousContainer !== currentContainer) {
      if (currentContainer.id === 'todoList') {
        transferArrayItem(
          previousContainer.data,
          currentContainer.data,
          event.previousIndex,
          event.currentIndex
        );
      }
      else if (currentContainer.id === 'inProgressList') {
        transferArrayItem(
          previousContainer.data,
          currentContainer.data,
          event.previousIndex,
          event.currentIndex
        );
      }
      else if (currentContainer.id === 'doneList') {
        transferArrayItem(
          previousContainer.data,
          currentContainer.data,
          event.previousIndex,
          event.currentIndex
        );
      }
    }

    this.cdRef.detectChanges();
  }
}
