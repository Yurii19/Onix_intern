<template lang="pug">
  .content
   router-view(v-on:click="sendImg")
    
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import TasksView from "../views/tasks.vue"
import ActivityView from "../views/activity.vue"

@Component({
  name: "MainConteiner",
})
export default class mainConteiner extends Vue {

  sendImg(img: any) {
    this.$emit("click", img);
  }
 
}
</script>

<style lang="scss" scoped>
@import "../styles/globalstyle.scss";

.content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #eeebe5;
}
</style>