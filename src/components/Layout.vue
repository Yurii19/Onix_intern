<template lang="pug">
  #Layout
    SideBlock(v-bind:numberofnotifications='notifications')
    .right
      main-header
      MainConteiner(v-on:click="printNotification")    
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBlock from "./AsideBar.vue";
import MainHeader from "./MainHeader.vue";
import MainConteiner from "./MainContent.vue";
import { dataTasks, dataActivity } from "./data";

@Component({
  components: {
    SideBlock,
    MainHeader,
    MainConteiner
  }
})
export default class Layout extends Vue {
  notifications: number = 3;

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
