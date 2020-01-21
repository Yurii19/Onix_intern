<template lang="pug">
  .modal_wrap(v-show="flagShowForm")
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
import Task from "../variables/Task";

@Component({
  name: "ModalForm",
})
export default class ModalForm extends Vue {
  @Prop()flagShowForm!: boolean;
  @Prop()dataSize!: number;
  $refs!: {
    newTaskName: HTMLFormElement;
    newTaskDeadline: HTMLFormElement;
    newTaskDescription: HTMLFormElement;
  };
  buttonAddValue: string = "Add";
  buttonCanselValue: string = "Cancel";
  namePlaceholder: string = "New task name";
  deadlinePlaceholder: string = "New task deadline";
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
      const theCurentTask: Task = {
        id: this.dataSize + 1,
        name: name._value,
        description: description._value,
        time: time._value,
        status: "todo"
      };
      this.$emit("deliveredTask", theCurentTask);
      for (let i = 0; i < this.newTask.length; i++) {
        this.newTask[i] = "";
      }
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../styles/globalstyle.scss";

.warning {
  box-shadow: inset 0px 0px 6px rgba(235, 105, 105, 0.9);
}

.modal_wrap {
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