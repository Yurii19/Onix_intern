<template lang="pug">
  #app
   SideBlock(v-bind:numberofnotifications='notifications')
   .right
      main-header(v-on:click='sendTasks')
      main-conteiner(v-on:click='printNotification', 
                     v-bind:activityTitle='pageTitle', 
                     v-bind:page='currentPage', 
                     v-bind:loadedflag='pageFlag')
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBlock from "./components/AsideBar.vue";
import MainHeader from "./components/MainHeader.vue";
import MainConteiner from "./components/MainContent.vue";
import { dataTasks, dataActivity } from "./components/data";

@Component({
  components: {
    SideBlock,
    MainHeader,
    MainConteiner
  }
})
export default class App extends Vue {
  notifications: number = 3;
  pageFlag: boolean = true;
  pageTitle: string = "TODAY";
  currentPage: object []= dataActivity;

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

  sendTasks(page: string) {
    switch (page) {
      case "Activity":
        this.currentPage = dataActivity;
        this.pageFlag = true;
        break;
      case "Tasks":
        this.currentPage = dataTasks;
        this.pageFlag = false;
        break;
      default:
        alert("The page does not exist yet");
        break;
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  display: flex;
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
