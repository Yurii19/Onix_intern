<template lang="pug">
  .details_wrap
    form.new-task
        .new-task_wrap
          .input-block
            input(v-bind:readonly="true" type="text" 
                  v-model="currentTask.name")
            input(v-bind:readonly="true" type="text"
                  v-model="currentTask.time")
            textarea(v-bind:readonly="true" rows="4" 
                     v-model="currentTask.description")
          .controls  
            transition(name="fade")
            input.add-buton(type="button" v-model="buttonSave" v-on:click.prevent="cancelModal")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Task from "@/variables/Task";

@Component({
  name: "TaskShowModal"
})
export default class TaskShowModal extends Vue {
  @Prop() targetTask!: Task;
  currentTask = this.targetTask;
  buttonSave: string = "Cancel";

  cancelModal() {
    this.$emit("closeModal");
  }
}
</script>


<style lang="scss" scoped>
@import "@/styles/globalstyle.scss";

.warning {
  box-shadow: inset 0px 0px 6px rgba(235, 105, 105, 0.9);
}

.details_wrap {
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  padding-top: 40px;
}

.add-buton {
  justify-content: center;
  background-color: #aaa69d;
  cursor: pointer;
  color: white;
  padding: 5px 0 5px 0;
  border-radius: 9px;
  outline: none;
  border-style: none;
  margin-top: 15px;
}

.new-task {
  position: relative;
  width: 40%;
  height: 280px;
  display: flex;
  opacity: 1;
  .new-task_wrap {
    display: flex;
    flex: 1;
    background-color: $light-grey;
    flex-direction: column;
    border-radius: 9px;
    padding: 10px;
    .controls {
      display: flex;

      .add-buton {
        justify-content: center;
        background-color: #aaa69d;
        cursor: pointer;
        color: white;
        display: flex;
        flex: 1;
        padding: 5px 0 5px 0;
        border-radius: 9px;
        outline: none;
        border-style: none;
        margin-top: 15px;
      }
    }

    .input-block {
      display: flex;
      flex-direction: column;
      .new-task_name {
        text-align: left;
      }
      input {
        padding: 5px;
        border-style: none;
        margin-top: 15px;
        padding-left: 10px;
        border-radius: 9px;
        outline: none;
      }
      textarea {
        padding: 5px;
        border-style: none;
        margin-top: 15px;
        padding-left: 10px;
        border-radius: 9px;
        outline: none;
      }
    }
  }
}
</style>