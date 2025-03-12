import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe o Router para navegação

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  
  
  // Definindo as tarefas nos diferentes estados
  todoTasks = [
    { id: 1, title: 'Task 1', description: 'Descrição da tarefa 1' },
    { id: 2, title: 'Task 2', description: 'Descrição da tarefa 2' },
  ];
  
  inProgressTasks = [
    { id: 3, title: 'Task 3', description: 'Descrição da tarefa 3' },
  ];
  
  doneTasks = [
    { id: 4, title: 'Task 4', description: 'Descrição da tarefa 4' },
  ];

  constructor(private router: Router) {}

  // Método para navegar para a página de tarefas
  navigateToTasks(): void {
    this.router.navigate(['/tasks']); // Redireciona para a rota '/tasks'
  }

  // Método para lidar com o evento de arrastar e soltar
  onTaskDropped(event: any): void {
    // Lógica para mover as tarefas entre os status
    const { previousContainer, currentContainer, item } = event;

    if (previousContainer !== currentContainer) {
      // Remover a tarefa do container anterior
      const previousIndex = previousContainer.data.findIndex((task: any) => task.id === item.data.id);
      previousContainer.data.splice(previousIndex, 1);

      // Adicionar a tarefa ao novo container
      currentContainer.data.push(item.data);
    }
  }
}
