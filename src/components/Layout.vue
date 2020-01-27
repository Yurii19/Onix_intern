<template lang="pug">
  .Layout
    SideBlock.side-bar#aside(
              ref="aside"
              v-bind:numberofnotifications='notifications'
              v-bind:numberOfMyTasks = 'numberTasks'
              v-bind:numberOfCompletedTasks = 'numberOfCompletedTasks'
              )
    .right
      main-header
      input.button-show(type="button" v-model="buttonShowValue" v-on:click="showAside")
      MainContent(v-bind:mcDataTasks="lDataTasks" 
                  v-on:click="printNotification" 
                  v-on:snd="resendTasksNumber" 
                  v-on:rmv="resendRemove"
                  v-on:sendAddedTask="refreshData"
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
  buttonShowValue = "M";
  sidebarFlag = false;
  leftBar = this.$refs.aside;

  $refs!: {
    aside: HTMLElement;
  };

  showAside() {
    const sel = document.getElementById("aside");
    const sidebar = this.$refs.aside; // ? undefined
    if (sel) {
      if (!this.sidebarFlag) {
        sel.style.display = "block";
        sel.style.position = "absolute";
        this.sidebarFlag = true;
        
      } else {
        sel.style.display = "none";
        sel.style.position = "static";
        this.sidebarFlag = false;
      }
    }
  }

  resendRemove() {
    this.numberOfCompletedTasks++;
  }

  resendTasksNumber(tasksNumber: any) {
    this.numberTasks = tasksNumber;
  }

  addApdated(updatedTask: any) {
    const taskId = updatedTask.id;
    const result = this.lDataTasks.find(element => element.id == taskId);
    if (result) {
      const targetId = this.lDataTasks.indexOf(result);
      this.lDataTasks.splice(targetId, updatedTask);
    }
  }

  refreshData(newDataTask: any) {
    this.numberTasks = newDataTask.length;
    this.lDataTasks = newDataTask.slice();
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

<style lang="scss" scoped>

.side-bar {
    display: block;
    position: static;
  }
.side-bar {
  border-color: red;
}

.Layout {
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
  align-items: left;
  flex: 1;
  flex-direction: column;
}

.button-show {
  width: 30px;
  height: 30px;
  background-color: grey;
  outline: none;
  border-radius: 50%;
  border-style: none;
  display: none;
  position:absolute;
  color: white;
  cursor: pointer;
}

@media (max-width: 500px) {
  .side-bar {
    display: none;
  }
  .right {
    width: 400px;
    margin-right: 0;
  }
  .button-show {
    display: block;
  }
}
</style>
