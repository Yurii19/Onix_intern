<template lang="pug">
  main.main
     TaskDetailsModal(
      v-if="showTaskDetailsModal"
      v-bind:targetTask="selectedTask" 
      v-on:close="closeModal")
     .main_header
        span.main_header_title KANBAN
     table(v-on:dblclick="selectTask" )
       tr.todoRow
         td.tr-head.todo {{statuses.todo}}
         td.tr-cell(v-for="(element,id) in currentTodo" v-bind:id="element.id" v-on:mousedown="grabTask") {{element.name}} <br/> 
          span.dl Deadline : {{element.time}}
       tr.inprogressRow
         td.tr-head.inprogress {{statuses.inprogress}}
         td.tr-cell(v-for="(element,id) in currentInProgress" v-bind:id="element.id" v-on:mousedown="grabTask") {{element.name}} <br/>
          span.dl Deadline : {{element.time}}
       tr.doneRow
         td.tr-head.done {{statuses.done}}
         td.tr-cell(v-for="(element,id) in currentDone" v-bind:id="element.id" v-on:mousedown="grabTask") {{element.name}} <br/>
          span.dl Deadline : {{element.time}}
     
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Statuses } from "../variables/Statuses";
import TaskDetailsModal from "../components/TaskDetailsModal.vue";
import Task from "../variables/Task";

@Component({
  name: "KanbanView",
  components: {
    TaskDetailsModal
  }
})
export default class KanbanView extends Vue {
  @Prop() twDataTasks!: Task[];
  statuses: any = Statuses;
  currentPage: Task[] = this.twDataTasks.slice();
  currentTodo: Task[] = this.currentPage.filter(el => el.status === "todo");
  currentInProgress: Task[] = this.currentPage.filter(
    el => el.status === "inprogress"
  );
  currentDone: Task[] = this.currentPage.filter(el => el.status === "done");
  showTaskDetailsModal: boolean = false;
  selectedTask: Task | null = null;

  grabTask(e: any) {
    let theTask = e.target; //element which was clicked
    const taskStartX = e.clientX;
    const taskStartY = e.clientY;
    if (!theTask.classList.contains("tr-cell")) {
      return;
    }
    const objTask = this.currentPage.find(element => element.id == theTask.id);
    const localCurentPage = this.currentPage;
    let localOldStatus: any;
    if (objTask) {
      localOldStatus = objTask.status;
    }
    const oldStatus = localOldStatus;
    theTask.style.position = "absolute";

    moveTask(e);

    function moveTask(e: any) {
      theTask.style.left = e.clientX - theTask.offsetWidth / 2 + "px";
      theTask.style.top = e.clientY - theTask.offsetHeight / 2 + "px";
    }

    document.onmousemove = function(e: any) {
      moveTask(e);
      if (
        allocateTask(e).classList.contains("inprogress") ||
        allocateTask(e).classList.contains("done") ||
        allocateTask(e).classList.contains("todo")
      ) {
        theTask.style.backgroundColor = "#b8e994";
      } else {
        theTask.style.backgroundColor = "";
      }
    };

    theTask.onmouseup = function(e: any) {
      const newElementRow = allocateTask(e);
      const newStatus = getNewStatus(newElementRow);
      if(oldStatus != newStatus){
        theTask.style.display = "none";
        dropHandler(newStatus);
        this.closeModal(objTask);
        theTask.style.display = "none";
      } else {
        theTask.style.position = "";
        theTask.style.backgroundColor = "";
        document.onmousemove = null;
        theTask.onmouseup = null;
      }       
    }

    function dropHandler(val: string) {
      switch (val) {
        case "done":
          if (objTask) {
            objTask.status = "done";
          }
          break;
        case "inprogress":
          if (objTask) {
            objTask.status = "inprogress";
          }
          break;
        case "todo":
          if (objTask) {
            objTask.status = "todo";
          }
          break;
      }
    }

    function getNewStatus(el: HTMLElement) {
      const statusSet: string[] = ["todo", "inprogress", "done"];
      let res: string = "";
      for (let i = 0; i < statusSet.length; i++) {
        if (el.classList.contains(statusSet[i])) {
          res = statusSet[i];
        }
      }
      return res;
    }

    function allocateTask(e: any) {
      e.target.style.display = "none";
      let elem = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
      e.target.style.display = "";
      return elem;
    }
  }

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
}
</script>

<style lang="scss" scoped>
@import "../styles/globalstyle.scss";

.done::before {
  @include pseudoelementFA("\f00c");
  color: green;
}

.todo::before {
  @include pseudoelementFA("\f12a");
  color: red;
}
.inprogress::before {
  @include pseudoelementFA("\f061");
  color: rgb(255, 196, 0);
}
.done::before,
.inprogress::before,
.todo::before {
  margin-right: 10px;
  border-bottom: 2px solid;
  border-right: 2px solid;
}
td {
  user-select: none;
}
.main {
  padding: 35px 30px 30px 30px;
  margin-top: 30px;
  width: 640px;
  border-radius: 9px;
  background-color: white;
  .main_header {
    margin-bottom: 30px;
    display: flex;
    text-align: left;
    color: $dark-grey;
    .main_header_title {
      color: $dark-grey;
    }
  }
}

// .tr-head:hover {
//   border: 1px solid red;
// }
table {
  display: flex;
  tr {
    display: flex;
    flex-direction: column;
    width: 33.33%;
    .tr-head {
      font-size: 1.2em;
      color: $dark-grey;
    }
    td {
      margin: 3px;
      text-align: left;
      padding: 10px 15px 10px 10px;
      border-radius: 9px;
      color: $dark-grey;
      .dl {
        color: rgb(9, 9, 59);
        font-size: 0.8em;
      }
    }
    .tr-cell {
      background-color: $light-grey;
      border-bottom: 2px solid white;
      border-top: 2px solid white;
      // transition: 1s;
    }
  }
  .tr-cell:hover {
    border-bottom: 2px solid #ee5a24;
    border-top: 2px solid #ee5a24;
    // transition: 1s;
  }
}
</style>
