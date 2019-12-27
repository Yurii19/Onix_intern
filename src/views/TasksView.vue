<template lang="pug">
  main.main
     .main_header(v-on:)
       span.main_header_title TASKS 
     form#new-task 
      .new-task_wrap 
        #input-block(v-show="flagShow")
          input#new-task-name(type="text" v-bind:placeholder="namePlaceholder" v-model="newTask[0].value")
          input#new-task-deadline(type="text" v-bind:placeholder="deadlinePlaceholder" v-model="newTask[1].value")
          textarea#new-task-description(rows="5" v-bind:placeholder="descriptionPlaceholder" v-model="newTask[2].value")
        .controls  
          transition(name="fade")
            input#task-add.add-buton(v-if="flagShow" type="submit" value="+ add new task" v-on:click.prevent="addTask")
          input#task-show.add-buton(type="button" v-model="buttonAddText" v-on:click="showForm")
     .main_paragraph(v-for="(action, index) in currentPage") 
       p.action_description_1(v-bind:class="action.label")
         span.action_text
            span.task_name {{action.name+' : '}}
            span.task_description {{action.description}}
         span.action-time {{action.time}}
       input.remove-button(type="button" v-model="buttonRemoveText" v-on:click="removeTask(action.name)")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { dataTasks } from "../components/data";
import Task from "../variables/Task";

@Component({
  name: "TasksView"
})
export default class TasksView extends Vue {
  currentPage: Task[] = [];

  flagShow: boolean = false;
  buttonAddText: string = "Show form";
  buttonRemoveText: string = "Remove task";
  namePlaceholder: string = "New task name";
  deadlinePlaceholder: string = "New task Deadline";
  descriptionPlaceholder: string = "Input task description";
  confirmQuestion: string =
    "Are you sure you want to change the number of tasks?";

  created() {
    this.currentPage = dataTasks.slice();
    this.sendSize();
  }

  beforeUpdate() {}

  updated(x: any) {
    this.sendSize();
  }

  mounted() {
    this.addBigSmallClass();
  }

  beforeDestroy() {}

  newTask = [
    {
      fieldName: "newTaskName",
      value: ""
    },
    {
      fieldName: "newTaskDeadline",
      value: ""
    },
    {
      fieldName: "newTaskDescription",
      value: ""
    }
  ];

  addBigSmallClass() {
    const arrTasks = document.getElementsByClassName("action_description_1");
    for (let i = 0; i < arrTasks.length; i++) {
      let index = "ell" + i;
      arrTasks[i].id = index;
      let temp = document.getElementById(index);
      if (temp) {
        temp.classList.add("smallbigsmall");
        temp.style.animationDelay = i * 0.5 + "s";
      }
    }
  }

  removeBigSmallClass() {
    const arrTasks = document.getElementsByClassName("action_description_1");
    for (let i = 0; i < arrTasks.length; i++) {
      if (arrTasks[i] && arrTasks[i].classList.contains("smallbigsmall")) {
        arrTasks[i].classList.remove("smallbigsmall");
      }
    }
  }

  sendSize() {
    const tasksNumber = this.currentPage.length;
    this.$emit("snd", tasksNumber);
  }

  removeTask(name: any) {
    if (confirm(this.confirmQuestion)) {
      this.currentPage = this.currentPage.filter(page => name != page.name);
      this.$emit("rmv");
    }
  }

  addTask() {
    const name = document.getElementById("new-task-name");
    const time = document.getElementById("new-task-deadline");
    const description = document.getElementById("new-task-description");
    const formFields = [name, time, description];

    formFields.forEach((value, index) => {
      if (value != null) {
        if (this.newTask[index].value === "") {
          value.classList.add("warning");
        } else {
          value.classList.remove("warning");
        }
      }
    });

    if (
      this.newTask[0].value &&
      this.newTask[1].value &&
      this.newTask[2].value
    ) {
      const res: Task = {
        name: this.newTask[0].value,
        description: this.newTask[2].value,
        time: this.newTask[1].value,
        label: "done"
      };
      this.currentPage.unshift(res);

      this.newTask.forEach(element => {
        element.value = "";
      });
      this.removeBigSmallClass();
      setTimeout(this.blink, 20);
      setTimeout(this.removeBlink, 3000);
    }
  }

  blink() {
    const arrTasks = document.getElementsByClassName("action_description_1");
    arrTasks[0].classList.add("blinktask");
  }

  removeBlink() {
    const arrTasks = document.getElementsByClassName("action_description_1");
    if (arrTasks[0] && arrTasks[0].classList.contains("blinktask")) {
      arrTasks[0].classList.remove("blinktask");
    }
  }

  showForm() {
    if (this.flagShow) {
      this.flagShow = false;
      this.buttonAddText = "Show form";
    } else {
      this.flagShow = true;
      this.buttonAddText = "Hide form";
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/globalstyle.scss";

@keyframes bigfont {
  0% {
    font-size: 1em;
  }
  50% {
    font-size: 1.1em;
  }
  100% {
    font-size: 1em;
  }
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
.blinktask {
  animation-name: blink;
  animation-duration: 0.9s;
  animation-iteration-count: 2;
}
.smallbigsmall {
  animation-name: bigfont;
  animation-duration: 0.9s;
}
.warning {
  box-shadow: inset 0px 0px 6px rgba(235, 105, 105, 0.9);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#new-task {
  display: flex;
  margin: 0 30px 0 30px;
  margin-top: 30px;

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

    #input-block {
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

.remove-button {
  background-color: #aaa69d;
  cursor: pointer;
  color: white;
  flex: 1;
  padding: 5px 10px 5px 10px;
  border-radius: 9px;
  outline: none;
  border-style: none;
  margin-top: 15px;
}

.task_name {
  font-style: italic;
  font-weight: 600;
}
#new-task::before {
  @include pseudoelementFA("\f08d");
  background-color: #cef9c6;
}
.done::before {
  @include pseudoelementFA("\f00c");
  background-color: #cef9c6;
}
.comment::before {
  @include pseudoelementFA("\f27a");
  background-color: #fff8dd;
}
.upload::before {
  @include pseudoelementFA("\f019");
  background-color: #e3efff;
}
.main {
  padding: 35px 0 30px 0;
  margin-top: 30px;
  width: 700px;
  border-radius: 9px;
  background-color: white;
}
.main {
  .main_header {
    text-align: left;
    color: $dark-grey;
    .main_header_title {
      margin-left: 30px;
      color: $dark-grey;
    }
  }
  .main_paragraph {
    margin-top: 30px;
    .action_description_1 {
      margin: 0 30px 0 30px;
      display: flex;
      .action_text {
        display: inline-block;
        margin-left: 15px;
        width: 70%;
        text-align: left;
      }
    }
  }
}
.extra-description {
  margin-top: 20px;
  padding: 20px;
  width: 68%;
  margin-left: 90px;
  text-align: left;
  background-color: #eeebe5;
  border-radius: 9px;
}
.uploaded {
  .uploaded_wrap {
    margin-left: 90px;
    margin-top: 20px;
    display: flex;
    .uploaded_item {
      cursor: pointer;
      height: 100px;
      width: 100px;
      margin-right: 10px;
      border-radius: 10px;
      background-image: url("../assets/Tulips.jpg");
      background-size: cover;
    }
  }
}
.action-time {
  margin-left: auto;
  color: $dark-grey;
  font-size: 0.9em;
}
</style>
