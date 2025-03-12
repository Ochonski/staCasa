import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    DragDropModule, 
    FormsModule 
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
