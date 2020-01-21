<template lang="pug">
  main.main
     .main_header
       span.main_header_title TASKS 
     TaskDetailsModal(v-if="showTaskDetailsModal" 
                      v-bind:targetTask="selectedTask"
                      v-on:close="closeModal")
     ModalForm(v-bind:flagShowForm="modalAdd" 
               v-bind:dataSize="currentPage.length" 
               v-on:closeModal="showForm"
               v-on:deliveredTask="addTask"
               )
     input.add-button(type="button" v-model="buttonAddText" v-on:click.prevent="showForm")
     transition-group(name="list" tag="div")    
       .main_paragraph(v-for="(action, index) in currentPage" v-bind:key="action.name" ) 
         .taskBlock(ref="taskBlock" v-bind:class="action.status" v-bind:id="action.id" v-on:click="selectTask")
           span.action_text(v-bind:id="action.id")
              span.task_name(v-bind:id="action.id") {{action.name+' : '}}
              span.task_description(v-bind:id="action.id") {{action.description}}
           span.action-time(v-bind:id="action.id") {{action.time}}
         input.remove-button(type="button" v-model="buttonRemoveText" v-on:click="removeTask(action.name)")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ModalForm from "../components/ModalForm.vue";
import TaskDetailsModal from "../components/TaskDetailsModal.vue";
import Task from "../variables/Task";

@Component({
  name: "TasksView",
  components: {
    ModalForm,
    TaskDetailsModal
  }
})
export default class TasksView extends Vue {
  @Prop() twDataTasks!: Task[];
  $refs!: {
    newTaskName: HTMLFormElement;
    newTaskDeadline: HTMLFormElement;
    newTaskDescription: HTMLFormElement;
    taskBlock: HTMLElement[];
  };
  currentPage: Task[] = [];
  modalAdd: boolean = false;
  buttonAddText: string = "Add new task";
  buttonRemoveText: string = "Remove task";
  confirmQuestion: string =
    "Are you sure you want to change the number of tasks?";
  newTask = ["", "", ""];
  showTaskDetailsModal: boolean = false;
  selectedTask: Task | null = null;

  created() {
    this.currentPage = this.twDataTasks.slice();
  }

  beforeUpdate() {}

  updated() {
    this.refreshData();
  }

  mounted() {
    this.addBigSmallClass2();
  }

  beforeDestroy() {}

  closeModal(updatedTask: any) {
    this.$emit("sendEditedTask", updatedTask);
    this.showTaskDetailsModal = false;
  }
  selectTask(event: any) {
    if (event.target) {
      let temp = event.target.id;
      const result = this.currentPage.find(element => element.id == temp);
      if (result) {
        this.selectedTask = result;
      }
    }
    this.showTaskDetailsModal = true;
  }

  addBigSmallClass() {
    const arrTasks = this.$refs.taskBlock;
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

  //for writing this function was used https://learn.javascript.ru/async-iterators-generators
  addBigSmallClass2() {
    const arrTasks = this.$refs.taskBlock;
    let asyncArrrayOfTasks = {
      start: 0,
      end: arrTasks.length,
      [Symbol.asyncIterator]() {
        return {
          current: this.start,
          last: this.end,
          dataLocal: arrTasks,
          async next() {
            await new Promise(resolve => setTimeout(resolve, 500));

            if (this.current <= this.last) {
              return { done: false, value: this.dataLocal[this.current++] };
            } else {
              return { done: true };
            }
          }
        };
      }
    };

    (async function() {
      for await (let el of asyncArrrayOfTasks) {
        if (el != undefined) {
          el.classList.add("smallbigsmall");
        }
      }
    })();
  }

  refreshId(arr: Task[]) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].id = i;
    }
  }

  removeTask(name: any) {
    if (confirm(this.confirmQuestion)) {
      this.currentPage = this.currentPage.filter(page => name != page.name);
      this.refreshId(this.currentPage);
      this.$emit("rmv");
    }
  }

  addTask(theCurentTask: Task) {
    this.currentPage.unshift(theCurentTask);
    this.showForm();
  }

  refreshData() {
    const transitDataTasks = this.currentPage;
    this.$emit("sendData", transitDataTasks);
  }

  showForm() {
    if (this.modalAdd) {
      this.modalAdd = false;
    } else {
      this.modalAdd = true;
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
  25% {
    opacity: 0.1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}

.list-enter-active {
  animation-name: blink;
  animation-duration: 3s;
}

.smallbigsmall {
  animation-name: bigfont;
  animation-duration: 0.9s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.add-button {
  justify-content: center;
  background-color: #aaa69d;
  cursor: pointer;
  color: white;
  width: 120px;
  padding: 5px 0 5px 0;
  border-radius: 9px;
  outline: none;
  border-style: none;
  margin-top: 15px;
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
.new-task::before {
  @include pseudoelementFA("\f08d");
  background-color: #cef9c6;
}
.done::before {
  @include pseudoelementFA("\f00c");
  background-color: #cef9c6;
}

.inprogress::before {
  @include pseudoelementFA("\f061");
  background-color: #f6e58d;
}

.todo::before {
  @include pseudoelementFA("\f12a");
  background-color: #fab1a0;
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
    display: flex;
    flex-direction: column;
    .main_header_title {
      margin-left: 30px;
      color: $dark-grey;
    }
  }
  .main_paragraph {
    margin-top: 30px;
    .taskBlock {
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

.task_description {
  word-wrap: break-word;
}
</style>
