import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdateDeleteTaskComponent } from './update-delete-task/update-delete-task.component';
import { FormsModule } from '@angular/forms';
import { TasksService } from './tasks.service';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent, 
    UpdateDeleteTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
