
import { tasksReq } from "../service/api"
import Task from "../variables/Task";
//localData: null;

export async function getData() {
    let res = null;
    tasksReq('tasks').then(resp => {res = resp.data;});
    //alert(res);
    return res;
    //alert(this.localData);
}

export function sendNewTask(newTask:any) {
   // alert("sentNewTask - "+ newTask.name);
    tasksReq.put('addtask',newTask).then(resp => alert(resp.status));
}

export function removeTaskRemote(taskId:any) {
    tasksReq.delete('remove', taskId).then(resp => alert(resp.status));
}

export function updateTaskRemote(updated: Task, position:number) {
    // alert('updateTaskRemote-> ' + updated.name );
    tasksReq.post('update', {task: updated, pos: position}).then(resp => alert(resp.status));
}