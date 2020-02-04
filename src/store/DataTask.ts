import { VuexModule, mutation, action, getter, Module } from "vuex-class-component";
import Task from "@/variables/Task";
import { dataTasks } from "@/components/data";

//@Module({namespacedPath: "store/"})
export class DataTask extends VuexModule {

  setOfTasks: Task[] = this.initData();

  initData() {
    const jsonTemp = localStorage.getItem('setOfTasks');
    let res = [];
    try {
      if (jsonTemp) {
        res = JSON.parse(jsonTemp);
      }
    } catch (error) {
      localStorage.removeItem('setOfTasks');
    }
    return res;
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
    let localSet = this.setOfTasks;
    localSet = localSet.filter(el => el.name != prop);
    for (let i = 0; i < localSet.length; i++) {
      localSet[i].id = i;
    }
    this.setOfTasks = localSet.slice();
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
}