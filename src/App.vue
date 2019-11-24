<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <sidebar v-bind:numberOfNotifications="notifications" />
    <div class="right">
      <mainHeader/>
      <mainConteiner v-on:click="printerNotification" />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import sidebar from "./components/AsideBar.vue";
import mainHeader from "./components/MainHeader.vue";
import mainConteiner from "./components/MainContent.vue";

export default {
  name: "app",
  components: {
    sidebar,
    mainHeader,
    mainConteiner
  },
  data: function() {
    return {
      notifications: 1,
      // menu: [
      //   ["Tasks", "TaskList.vue"],
      //   ["Kanban", "KanbanList.vue"],
      //   ["Activity", "ActivityList.vue"],
      //   ["Calendar", "CalendarList.vue"],
      //   ["Files", "FilesList.vue"]
      // ]
    };
  },
  methods: {
    printerNotification: function(img) {
      const imgs = document.getElementById("pics").children;
      for (let i = 0; i < imgs.length; i++) {
        if (img === imgs[i]) {
          // alert(i);
          this.notifications = i + 1;
        }
      }
    }
    // doMenu: function(menuItem) {
    //   // const link = menuItem;
    //   const temp = this.menu;
    //   for (let i = 0; i < temp.length; i++) {
    //     if (temp[i][0] === menuItem) {
    //       alert(this.menu[i][1] +" - "+ menuItem);
    //     }
    //   }
      //alert(this.menu[1][1] + menuItem);
    //}
  }
};
</script>

<style>
body {
  margin: 0;
}
/* .right {
border: 1px solid red;
} */
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
  /* align-items: stretch; */
  flex-direction: column;
}
</style>
