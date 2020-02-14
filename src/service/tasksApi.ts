
import { tasksReq } from "../service/api"
import Task from "../variables/Task";
//localData: null;

export async function getData() {
    let res = null;
    tasksReq('/tasks').then(resp => res = resp.data);
    //alert(res);
    return res;
    //alert(this.localData);
}

export function sendNewTask(newTask:any) {
   // alert("sentNewTask - "+ newTask.name);
    tasksReq.put('/tasks',newTask).then(resp => alert(resp.status)).catch((err: any) => alert(err));
    
}

export function removeTaskRemote(taskId:any) {
    tasksReq.delete('/tasks'+'/'+taskId).then(resp => alert(resp.status)).catch((err:any) => alert(err));
}

export function updateTaskRemote(updated: Task) {
    // alert('updateTaskRemote-> ' + updated.name );
    tasksReq.patch('/tasks',  updated ).then(resp => alert(resp.status)).catch((err:any) => alert(err));
}