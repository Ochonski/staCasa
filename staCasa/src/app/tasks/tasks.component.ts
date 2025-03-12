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

  // Dados da tarefa em edição
  newTaskTitle: string = '';
  newTaskDetail: string = '';
  expandedTaskId: number | null = null;

  // Controle do modo de edição
  isEditMode: boolean = false;
  taskBeingEdited: Task | null = null;

  constructor(private cdRef: ChangeDetectorRef) {}

  // Função para expandir a exibição de detalhes de uma tarefa
  toggleExpand(taskId: number) {
    this.expandedTaskId = this.expandedTaskId === taskId ? null : taskId;
  }

  // Função para editar uma tarefa
  editTask(task: Task) {
    this.newTaskTitle = task.title;
    this.newTaskDetail = task.detail;
    this.isEditMode = true;
    this.taskBeingEdited = task;
  }

  // Função para remover uma tarefa
  removeTask(taskId: number) {
    this.todoTasks = this.todoTasks.filter(task => task.id !== taskId);
    this.inProgressTasks = this.inProgressTasks.filter(task => task.id !== taskId);
    this.doneTasks = this.doneTasks.filter(task => task.id !== taskId);
  }

  // Função para adicionar ou salvar tarefa
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

  // Função para resetar o formulário
  resetForm() {
    this.newTaskTitle = '';
    this.newTaskDetail = '';
    this.isEditMode = false;
    this.taskBeingEdited = null;
  }

  // Função para mover tarefas entre listas
  onTaskDropped(event: CdkDragDrop<Task[]>) {
    const previousContainer = event.previousContainer;
    const currentContainer = event.container;

    // Se as listas de origem e destino são diferentes
    if (previousContainer !== currentContainer) {
      // Se a tarefa foi movida para a lista de "A Fazer"
      if (currentContainer.id === 'todoList') {
        transferArrayItem(
          previousContainer.data,
          currentContainer.data,
          event.previousIndex,
          event.currentIndex
        );
      }
      // Se a tarefa foi movida para a lista de "Em Progresso"
      else if (currentContainer.id === 'inProgressList') {
        transferArrayItem(
          previousContainer.data,
          currentContainer.data,
          event.previousIndex,
          event.currentIndex
        );
      }
      // Se a tarefa foi movida para a lista de "Concluídas"
      else if (currentContainer.id === 'doneList') {
        transferArrayItem(
          previousContainer.data,
          currentContainer.data,
          event.previousIndex,
          event.currentIndex
        );
      }
    }

    // Forçar detecção de mudanças para garantir que o Angular re-renderize a UI
    this.cdRef.detectChanges();
  }
}
