<template>
  <div id="app">
    <sidebar v-bind:numberOfNotifications="notifications" />
    <div class="right">
      <mainHeader v-on:click="sendTasks" />
      <mainConteiner
        v-on:click="printNotification"
        v-bind:activityTitle="activity"
        v-bind:page="currentPage"
        v-bind:loadedFlag="pageFlag"
      />
      <!-- <contentTasks v-bind:tasksTitle="tasks"/> -->
    </div>

    <!-- <task /> -->
  </div>
</template>

<script>
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
      notifications: 3,
      activity: "TODAY",
      pageFlag: true,
     // currentPage:  this.activityPage,
      currentPage: [
        {
          name: "Darika Samak ",
          description:
            "mark as done Listing on Product Hunt so that we can reach as many potential users",
          time: "8:40 PM",
          extraDescription: "",
          beforeLable: "done"
        },
        {
          name: "Emilee Simchenko ",
          description:
            "commented on Account for teams and personal in bottom style",
          time: "7:32 PM",
          extraDescription:
            "During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes",
          beforeLable: "comment"
        },
        {
          name: "Darika Samak ",
          description:
            "uploaded 4 files on An option to search in current projects or in all projects",
          time: "6:02 PM",
          extraDescription: "",
          beforeLable: "upload"
        }
      ]
    }
  },
  methods: {
    printNotification: function(img) {
      const imgs = document.getElementById("pics").children;
      for (let i = 0; i < imgs.length; i++) {
        if (img === imgs[i]) {
          this.notifications = i + 1;
        }
      }
    },
    sendTasks: function(pageData) {
      // if (tasksList === "Activity") {
        this.currentPage = pageData.slice();
       // this.pageFlag = true;
      // } else {
      //   this.currentPage = tasksList.slice();
      //   this.pageFlag = false;
      // }
    }
  }
};
</script>

<style>
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
