import { VuexModule, mutation, action, getter, Module } from "vuex-class-component";
import Task from "../variables/Task";
import { dataTasks } from "../components/data";
import axios from 'axios';
import {tasksReq} from "../service/api"
import { getData, sendNewTask, removeTaskRemote,updateTaskRemote } from "../service/tasksApi"

//@Module({namespacedPath: "store/"})
export class DataTask extends VuexModule {

  setOfTasks: Task[] = 
  [{
            id: 1,
            name: "Learn scss",
            description: "Internet resources should be used",
            time: "2019-11-27",
            status: "done",
            created:"1579989600000"
          }];

  @mutation initLocalData(remoted:any){
    //alert('initLocalData');
    this.setOfTasks = remoted.slice();
  }

  @mutation addTask(newTask: Task) {
    this.setOfTasks.unshift(newTask);
    for (let i = 0; i < this.setOfTasks.length; i++) {
      this.setOfTasks[i].id = i;
    }
  }
  @mutation updateData(updated: any) {
    const res = this.setOfTasks.find(el => el.id === updated.id);
    if (res) {
      const targetId = this.setOfTasks.indexOf(res);
      this.setOfTasks.splice(targetId, updated);
    }
  }
  @mutation removeTask(prop: string) {
    alert('removeTask');
    let localSet = this.setOfTasks;
    localSet = localSet.filter(el => el.name != prop);
    for (let i = 0; i < localSet.length; i++) {
      localSet[i].id = i;
    }
    this.setOfTasks = localSet.slice();
  }

  @action async updateTaskByAction(param: { task: Task; id: number; }) {
    alert('updateTaskByAction');
    updateTaskRemote(param.task, param.id);
    this.updateData(param.task);
  }
  @action async removeTaskByAction(targId: string) {
    removeTaskRemote(targId);
    this.removeTask(targId);
  }
  @action async addTaskByAction(newtask:any) {
    sendNewTask(newtask);
    this.addTask(newtask);
  }

  @action async getRemoteData() {
   tasksReq('tasks').then(resp =>  {this.initLocalData(resp.data)});
  }

  @action async addRemoteData() {
    tasksReq.put('tasks')
  }

  @action async testAction() {
    let temp = null;
    tasksReq('').then(resp => { alert(resp.data) });
  }

  get numberOfComplited() {
    let count = 0;
    this.setOfTasks.forEach(el => {
      if (el.status === 'done') {
        count++;
      }
    });
    return count;
  }
  get dataValue() {
    return this.setOfTasks;
  }
  get dataSize() {
    return this.setOfTasks.length;
  }
  // get remoteValue() {
  //   return this.remoteDataTasks;
  // }
}