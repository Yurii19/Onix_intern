<template lang="pug">
    form.new-task
        .new-task_wrap 
          .input-block
            input(type="text" ref="newTaskName" v-bind:placeholder="namePlaceholder" v-model="newTask[0]")
            input(type="text" ref="newTaskDeadline" v-bind:placeholder="deadlinePlaceholder" v-model="newTask[1]")
            textarea(rows="10" ref="newTaskDescription" v-bind:placeholder="descriptionPlaceholder" v-model="newTask[2]")
          .controls  
            transition(name="fade")
            input.add-buton(type="submit" v-model="buttonAddValue" v-on:click.prevent="addTask")
            input.add-buton(type="button" v-model="buttonCanselValue" v-on:click="cancelForm")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Task from "@/variables/Task";
import { vxm } from "@/store/store";


@Component({
  name: "TaskAddModal",
 
})
export default class TaskAddModal extends Vue {
  @Prop()flagShowForm!: boolean;
   storeTasks = vxm.tasks;
  dataSize =  this.storeTasks.dataSize;
  $refs!: {
    newTaskName: HTMLFormElement;
    newTaskDeadline: HTMLFormElement;
    newTaskDescription: HTMLFormElement;
  };
  action = ["addTask", "editTask"];
  buttonAddValue: string = "Add";
  buttonCanselValue: string = "Cancel";
  namePlaceholder: string = "New task name";
  deadlinePlaceholder: string = 'New task deadline - "yyyy-mm-dd"';
  descriptionPlaceholder: string = "Input task description";
  newTask = ["", "", ""];

 

  cancelForm() {
    this.$emit("closeModal");
  }

  addTask() {
    const name = this.$refs.newTaskName;
    const time = this.$refs.newTaskDeadline;
    const description = this.$refs.newTaskDescription;
    const formFields = [name, time, description];
    formFields.forEach((el, index) => {
      if (el != null) {
        if (el._value === "") {
          el.classList.add("warning");
        } else {
          el.classList.remove("warning");
        }
      }
    });

    if (name._value && time._value && description._value) {
      const newTask: Task = {
        id: this.dataSize + 1,
        name: name._value,
        description: description._value,
        time: time._value,
        status: "todo",
        created:  Date.now()
      };
      this.storeTasks.addTask(newTask);
      for (let i = 0; i < this.newTask.length; i++) {
        this.newTask[i] = "";
      }
      this.cancelForm() ;
    }
  }
}
</script>


<style lang="scss" scoped>
@import "@/styles/globalstyle.scss";

.warning {
  box-shadow: inset 0px 0px 6px rgba(235, 105, 105, 0.9);
}

.new-task {
  position: relative;
  width: 40%;
  height: 40%;
  display: flex;
  opacity: 1;
  .new-task_wrap {
    display: flex;
    flex: 1;
    background-color: $light-grey;
    flex-direction: column;
    border-radius: 9px;
    padding: 10px;
    margin-left: 10px;
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