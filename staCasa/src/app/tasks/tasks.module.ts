import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    DragDropModule  // Importação do DragDropModule para permitir arrastar e soltar
  ],
  exports: [
    TasksComponent  // Exportando para uso em outros módulos, se necessário
  ]
})
export class TasksModule { }
