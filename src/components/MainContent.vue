<template lang="pug">
  .content
   router-view(
              v-on:click="sendImg" 
              )
    
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from 'vue-property-decorator';
import Task from "../variables/Task";

@Component({
  name: "MainContent",
})
export default class MainContent extends Vue {
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