import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: string[];
  taskValue: string ="";

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.task = this.taskService.tasks;
  }

  onSave(){
    if(this.taskValue != ""){
      this.task.push(this.taskValue);
      this.taskValue = "";
    }
    else{
      window.alert("Please enter the task");
    }
  }

  onEnter(){
    if(this.taskValue != ""){
      this.task.push(this.taskValue);
      this.taskValue = "";
    }
    else{
      window.alert("Please enter the task");
    } 
  }

}
