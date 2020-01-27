<template lang="pug">
  .content
   router-view(v-bind:twDataTasks="mcDataTasks"
              v-on:click="sendImg" 
              v-on:snd="resendTask" 
              v-on:rmv="resendRemove"
              v-on:sendAddedTask="sendAddedTask"
              v-on:sendEditedTask="resendEditedTask")
    
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
  @Prop() mcDataTasks!: Task[];

  resendRemove(){
    this.$emit("rmv");
  }

  sendImg(img: any) {
    this.$emit("click", img);
  }

  resendTask(tasksNumber:any) {
    this.$emit("snd", tasksNumber);
  }

  sendAddedTask(newDataTask:any) {
    this.$emit("sendAddedTask", newDataTask);
  }

  resendEditedTask(updatedTask: any) {
    this.$emit("sendEditedTask", updatedTask);
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