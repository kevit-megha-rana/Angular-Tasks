import { Component, OnInit } from '@angular/core';
import { ITask, TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  tasks: ITask[] = [];
  taskValue: string ="";
  
  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }

  onSave(){
    if(this.taskValue.trim()){
      this.tasks.push({
        task:this.taskValue,
        isEditEnable:false
      });
      this.taskValue = "";
    }
    else{
      window.alert("Please enter the task");
    }
  }

  onEnter(){
    if(this.taskValue.trim()){
      this.tasks.push({
        task:this.taskValue,
        isEditEnable:false
      });
      this.taskValue = "";
    }
    else{
      window.alert("Please enter the task");
    } 
  }

}
