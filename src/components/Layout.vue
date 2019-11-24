<template>
  <div id="app">
    <sidebar v-bind:numberOfNotifications="notifications" />
    <div class="right">
      <mainHeader />
      <mainConteiner v-on:click="printerNotification" />
    </div>
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
      notifications: 1
    };
  },
  methods: {
    printerNotification: function(img) {
      const imgs = document.getElementById("pics").children;
      for (let i = 0; i < imgs.length; i++) {
        if (img === imgs[i]) {
          this.notifications = i + 1;
        }
      }
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
