import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component'; // Importe o componente

const routes: Routes = [
  { path: '', component: TasksComponent },  // Página inicial
  { path: 'tasks', component: TasksComponent },  // Rota para a página de tarefas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
