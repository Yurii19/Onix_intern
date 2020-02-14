<template lang="pug">
  main.main
     LayoutModal(
          v-if="showModal"
          v-bind:targetTask="taskToEdit" 
          v-on:closeModal="closeModal"
          v-bind:typeModal="typeModal"
          )
     .main_header
        span.main_header_title KANBAN
        .search-blok
          label(for="search") SEARCH
          input.search(type='text' ref='keyWord' v-on:input="searchTaskByName")
     .sort-wrap 
       .input-period
          span Sort by period
          input.button-sort(type="button" v-model="sortButtonValue" v-on:click="sortByPeriod")
          label(for="dateStart") From
          input#dateStart(type='date' ref="dateStart")
          label(for="dateEnd") to
          input#dateEnd(type='date' ref="dateEnd")  
     table
       tr(v-for="(item, index) in statusSet")
         td.tr-head(
           v-bind:class="statusSet[index]"
           v-on:dragover="moveAbove"
           v-on:drop="relocateTask"
         ) {{headersSet[index] }} : {{rowsSet[index].length}}
         td.tr-cell(v-for="(element,id) in rowsSet[index]"
           v-on:click="requestEditModal"
           v-bind:draggable="true"
           v-on:dragstart="grabItem"
           v-bind:id="element.id"
           v-bind:class="[getClassOfDecoration(item), getBackTasks(element) ]"
           ) {{element.name}} <br/> 
          span.dl Deadline : {{element | dateFilter}}
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import { Statuses } from "../variables/Statuses";
import LayoutModal from "../components/LayoutModal.vue";
import Task from "../variables/Task";
import MixinComponent from "../variables/MixinComponent.vue";
import { vxm } from "../store/store";

@Component({
  name: "KanbanView",
  components: {
    LayoutModal
  },
  filters: {
    dateFilter: function(val: any) {
      return val.time;
    }
  },
  mixins: [MixinComponent]
})
export default class KanbanView extends Mixins(MixinComponent) {

  storeTasks = vxm.tasks;
  $refs!: {
    keyWord: HTMLFormElement;
    dateStart: HTMLFormElement;
    dateEnd: HTMLFormElement;
  };

  typeModal = "";
  showModal: boolean = false;
  statusSet = ["todo", "inprogress", "done"];
  headersSet = ["To do", "In progress", "Done"];
  classesSet = {
    todo: "todoDecor",
    inprogress: "inprogressDecor",
    done: "doneDecor"
  };
  backtask = "backtask";
  sortButtonValue = "sort";

  statuses: any = Statuses;
  currentPage: Task[] = this.storeTasks.dataValue.slice();
  rowsSet = [
    this.currentPage.filter(el => el.status === "todo"),
    this.currentPage.filter(el => el.status === "inprogress"),
    this.currentPage.filter(el => el.status === "done")
  ];

  todoNumber = this.rowsSet[0].length;
  inprogressNumber = this.rowsSet[1].length;
  doneNumber = this.rowsSet[2].length;

  sortByPeriod() {
    if (this.$refs.dateStart.value && this.$refs.dateEnd.value) {
      let deadline = 0;
      let tempSetOfTasks = [];
      const timeStart = Date.parse(this.$refs.dateStart.value);
      const timeEnd = Date.parse(this.$refs.dateEnd.value);
      tempSetOfTasks = this.currentPage.filter(
        task =>
          timeStart < Date.parse(task.time) && Date.parse(task.time) < timeEnd
      );
      this.currentPage = tempSetOfTasks.slice();
      this.refreshTable();
    }
  }

  searchTaskByName() {
    const keyWord = this.$refs.keyWord.value.trim();
    const filtered = this.storeTasks.dataValue.filter((el: any) =>
      el.name.toLowerCase().includes(keyWord)
    );
    this.currentPage = filtered.slice();
    this.refreshTable();
  }

  get todoStyle() {
    return this.classesSet.todo;
  }

  get inprogressStyle() {
    return this.classesSet.inprogress;
  }

  get doneStyle() {
    return this.classesSet.done;
  }

  getClassOfDecoration(status: string) {
    let res = "";
    switch (status) {
      case "todo":
        res = this.todoStyle;
        break;
      case "inprogress":
        res = this.inprogressStyle;
        break;
      case "done":
        res = this.doneStyle;
        break;
    }
    return res;
  }

  getBackTasks(theTask: Task) {
    let warningClass = "";
    const daySize = 86400000;
    const taskDeadLine = Date.parse(theTask.time);
    const nowTime = new Date().getTime();
    const diff = taskDeadLine - nowTime;
    if (diff < 0 && theTask.status != "done") {
      warningClass = "backtask";
    } else if (diff < daySize && diff > 0 && theTask.status != "done") {
      warningClass = "lessday";
    }
    return warningClass;
  }

  refreshTable() {
    this.rowsSet = [
      this.currentPage.filter(el => el.status === "todo"),
      this.currentPage.filter(el => el.status === "inprogress"),
      this.currentPage.filter(el => el.status === "done")
    ];
  }

  relocateTask(e: any) {
    const localTask = e.target;
    const taskId = e.dataTransfer.getData("text") as number;
    let theTask: any = this.currentPage.find(el => el.id == taskId);
    if (theTask) {
      const oldStatus = theTask.status;
      const newStatus = this.getRowStatus(localTask);
      if (newStatus != oldStatus && oldStatus != "done") {
        theTask.status = newStatus;
        let taskPosition: number =   this.storeTasks.dataValue.findIndex((e:any) => e.id === theTask.id);
        const res = {updated: theTask, position:taskPosition};
        this.storeTasks.updateTaskByAction(res);
        this.currentPage = this.storeTasks.dataValue.slice();
      }
    }
    localTask.style.backgroundColor = "";
    this.refreshTable();
  }

  grabItem(e: any) {
    const targEl = e.target as HTMLElement;
    e.dataTransfer.setData("text", targEl.id);
  }

  moveAbove(e: any) {
    e.preventDefault();
    let destElement = e.target;
    destElement.style.transition = "1s";
    destElement.style.backgroundColor = "purple";
    destElement.ondragleave = function() {
      destElement.style.backgroundColor = "";
    };
  }

  getRowStatus(el: HTMLElement) {
    const localSet = this.statusSet;
    for (let i = 0; i < localSet.length; i++) {
      if (el.classList.contains(localSet[i])) {
        return this.statusSet[i];
      }
    }
  }

  requestEditModal(e: any) {
    this.showModal = true;
    this.typeModal = "Edit";
    this.selectTask(e);
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/globalstyle.scss";

.lessday {
  box-shadow: inset 0px 0px 10px rgba(240, 177, 4, 0.9);
}

.backtask {
  box-shadow: inset 0px 0px 20px rgba(235, 105, 105, 1);
}

.done::before {
  @include pseudoelementFA("\f00c");
  color: green;
}
.doneDecor {
  color: #44bd32;
}

.todo::before {
  @include pseudoelementFA("\f12a");
  color: red;
}
.todoDecor {
  color: #c0392b;
}

.inprogress::before {
  @include pseudoelementFA("\f061");
  color: rgb(255, 196, 0);
}
.inprogressDecor {
  color: #ffaf40;
}
.done::before,
.inprogress::before,
.todo::before {
  margin-right: 10px;
  border-bottom: 2px solid;
  border-right: 2px solid;
}
.sort-wrap {
  padding: 20px 0 20px 0;
  display: flex;

  justify-content: center;
  color: $dark-grey;
  background-color: $light-grey;
  border-radius: 12px;
  .input-period {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    input {
      color: $dark-grey;
      outline: none;
      margin: 0 5px 0 5px;
      border-radius: 7px;
      border: 1px dotted $dark-grey;
      background-color: $light-grey;
    }
    .button-sort {
      background-color: $dark-grey;
      color: white;
      cursor: pointer;
    }
  }
}
.search {
  border-radius: 7px;
  outline: none;
  border: 1px dotted $dark-grey;
  background-color: $light-grey;
  padding: 2px 5px 2px 5px;
  margin-left: 3px;
  margin-top: 1px;
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
    justify-content: space-between;
    text-align: left;
    color: $dark-grey;
    .main_header_title {
      color: $dark-grey;
    }
  }
}

table {
  padding-top: 30px;
  display: flex;
  tr {
    display: flex;
    flex-direction: column;
    min-width: 33.33%;
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
      font-style: italic;
      outline: none;
    }
  }
  .tr-cell:hover {
    transition: 1s;
    text-decoration: underline;
  }
}
@media (max-width: 700px) {
  .main_header {
    display: flex;
    flex-direction: column;
  }
  .sort-wrap {
    display: flex;
    flex-direction: column;
  }
  .input-period {
    display: flex;
    flex-direction: column;
  }
  table {
    flex-direction: column;
  }
}
</style>
