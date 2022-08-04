import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-update-delete-task',
  templateUrl: './update-delete-task.component.html',
  styleUrls: ['./update-delete-task.component.css']
})
export class UpdateDeleteTaskComponent implements OnInit {

  task: string[];
  isEditEnable: boolean[] = [false];
  taskValue: string;
  indexValue : number;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.task = this.tasksService.tasks;
  }

  deleteTask(id:number){
    this.task.splice(id,1);
  }

  editTask(id:number){
    this.taskValue = this.task[id];
    this.isEditEnable[id] = ! this.isEditEnable[id];
  }

  onEnter(id:number){
    if(this.taskValue.trim()){
      this.task[id] = this.taskValue;
      this.isEditEnable[id] = ! this.isEditEnable[id];
    }
    else{
      window.alert("Please enter the task");
    }
  }

}

