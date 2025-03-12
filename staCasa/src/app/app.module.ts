import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component'; // Verifique se o caminho está correto
import { DragDropModule } from '@angular/cdk/drag-drop'; // Importando o DragDropModule

import { TasksModule } from './tasks/tasks.module'; // Adiciona a importação do TasksModule

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule, 
    DragDropModule  // Adicionando o DragDropModule aos imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
