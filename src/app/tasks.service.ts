export interface ITask {
    task: string,
    isEditEnable: boolean
};

export class TasksService{

    taskArray: string[] = ["Learn Angular","Task 1","Task 2","Learn to cook food","Task 3","Task 4","Learn to drive car","Task 5","Task 6","Learn French"];

    tasks: ITask[] = [];
}