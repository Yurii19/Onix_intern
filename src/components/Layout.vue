<template lang="pug">
  #Layout
    SideBlock(v-bind:numberofnotifications='notifications'
              v-bind:numberOfMyTasks = 'numberTasks'
              v-bind:numberOfCompletedTasks = 'numberOfCompletedTasks'
              )
    .right
      main-header
      MainContent(v-bind:mcDataTasks="lDataTasks" 
                  v-on:click="printNotification" 
                  v-on:snd="resendTasksNumber" 
                  v-on:rmv="resendRemove"
                  v-on:sendData="refreshData"
                  v-on:sendEditedTask="addApdated"
                  )    
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBlock from "./AsideBar.vue";
import MainHeader from "./MainHeader.vue";
import MainContent from "./MainContent.vue";
import { dataTasks } from "./data";
import Task from "../variables/Task";
@Component({
  components: {
    SideBlock,
    MainHeader,
    MainContent
  }
})
export default class Layout extends Vue {
  lDataTasks: Task[] = dataTasks.slice();
  notifications: number = 3;
  numberTasks: number = this.lDataTasks.length;
  numberOfCompletedTasks: number = 372;

  resendRemove() {
    this.numberOfCompletedTasks++;
  }

  resendTasksNumber(tasksNumber: any) {
    this.numberTasks = tasksNumber;
  }

  addApdated (updatedTask:any) {
    const taskId = updatedTask.id;
     const result = this.lDataTasks.find(element => element.id == taskId);
     if (result){
        const targetId = this.lDataTasks.indexOf(result);
       // this.lDataTasks[targetId] = updatedTask ;
        this.lDataTasks.splice(targetId, updatedTask) ;

     }
  }

  refreshData(transitDataTasks:any) {
    this.numberTasks = transitDataTasks.length;
    this.lDataTasks = transitDataTasks.slice() ;
  }

  printNotification(img: HTMLElement) {
    const imgBox: HTMLElement | null = document.getElementById("pics");
    if (imgBox != null) {
      const imgs: HTMLCollection = imgBox.children;
      for (let i = 0; i < imgs.length; i++) {
        if (img === imgs[i]) {
          this.notifications = i + 1;
        }
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
#Layout {
  display: flex;
  flex: 1;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.right {
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>
