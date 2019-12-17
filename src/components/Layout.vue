<template lang="pug">
  #Layout
    SideBlock(v-bind:numberofnotifications='notifications'
              v-bind:numberOfMyTasks = 'numberTasks'
              )
    .right
      main-header
      MainContent(v-on:click="printNotification" v-on:snd="resendTasksNumber")    
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBlock from "./AsideBar.vue";
import MainHeader from "./MainHeader.vue";
import MainContent from "./MainContent.vue";
import { dataTasks } from "./data";

@Component({
  components: {
    SideBlock,
    MainHeader,
    MainContent
  }
})
export default class Layout extends Vue {
  notifications: number = 3;
  numberTasks: number = dataTasks.length ;

  resendTasksNumber(tasksNumber: any) {
    this.numberTasks = tasksNumber;
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
