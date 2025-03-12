import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  // Listas de tarefas
  todoTasks = [{ id: 1, title: 'Tarefa 1', detail: 'Detalhe 1' }];
  inProgressTasks = [{ id: 2, title: 'Tarefa 2', detail: 'Detalhe 2' }];
  doneTasks = [{ id: 3, title: 'Tarefa 3', detail: 'Detalhe 3' }];
  
  // Dados da tarefa em edição
  newTaskTitle: string = '';
  newTaskDetail: string = '';
  expandedTaskId: number | null = null;

  // Controle do modo de edição
  isEditMode: boolean = false;
  taskBeingEdited: any = null;

  // Função para expandir a exibição de detalhes de uma tarefa
  toggleExpand(taskId: number) {
    this.expandedTaskId = this.expandedTaskId === taskId ? null : taskId;
  }

  // Função para editar uma tarefa
  editTask(task: any) {
    this.newTaskTitle = task.title;
    this.newTaskDetail = task.detail;
    this.isEditMode = true;
    this.taskBeingEdited = task;
  }

  // Função para adicionar ou salvar tarefa
  addTask() {
    if (this.isEditMode) {
      // Atualiza a tarefa existente
      this.taskBeingEdited.title = this.newTaskTitle;
      this.taskBeingEdited.detail = this.newTaskDetail;
      
      // Limpa os campos após salvar
      this.resetForm();
    } else {
      // Adiciona nova tarefa
      const newTask = {
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
  onTaskDropped(event: any) {
    // Implemente a lógica para mover a tarefa entre as listas
  }
}
