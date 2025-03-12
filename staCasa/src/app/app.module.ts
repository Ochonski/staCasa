import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule, 
    DragDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
