import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

interface ITask {task: string,
  isEditEnable: boolean};

@Component({
  selector: 'app-update-delete-task',
  templateUrl: './update-delete-task.component.html',
  styleUrls: ['./update-delete-task.component.css']
})

export class UpdateDeleteTaskComponent implements OnInit {

  
  taskValue: string;
  indexValue : number;

  

  tasks: ITask[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.tasks.forEach((ele)=>{
      this.tasks.push({task:ele,isEditEnable: false})
      console.log(ele);    
    }) 
  }

  deleteTask(index:number){
    this.tasks.splice(index,1);
  }

  editTask(index:number){
    this.taskValue = this.tasks[index].task;
    this.tasks[index].isEditEnable = !this.tasks[index].isEditEnable;
   
  }

  onEnter(index:number){
    if(this.taskValue.trim()){
      this.tasks[index].task = this.taskValue;
      this.tasks[index].isEditEnable = !this.tasks[index].isEditEnable;
      
    }
    else{
      window.alert("Please enter the task");
    }
  }

}
