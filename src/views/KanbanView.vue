<template lang="pug">
  main.main
     .main_header
        span.main_header_title KANBAN
     table
       tr
         td.tr-head.todo {{statuses.todo}}
         td.tr-cell(v-for="(element,id) in currentTodo") {{element.name}} <br/> 
          span.dl Deadline : {{element.time}}
       tr  
         td.tr-head.inprogress {{statuses.inprogress}}
         td.tr-cell(v-for="(element,id) in currentInProgress") {{element.name}} <br/>
          span.dl Deadline : {{element.time}}
       tr 
         td.tr-head.done {{statuses.done}}
         td.tr-cell(v-for="(element,id) in currentDone") {{element.name}} <br/>
          span.dl Deadline : {{element.time}}
     
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { dataTasks } from "../components/data";
import { Statuses } from "../variables/Statuses";
import Task from "../variables/Task";

@Component({
  name: "KanbanView"
})
export default class TasksView extends Vue {
  statuses: any = Statuses;
  currentPage: Task[] = dataTasks.slice();
  currentTodo: Task[] = this.currentPage.filter(el => el.status === "todo");
  currentInProgress: Task[] = this.currentPage.filter(
    el => el.status === "inprogress"
  );
  currentDone: Task[] = this.currentPage.filter(el => el.status === "done");
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
      transition: 1s;
    }
  }
  .tr-cell:hover {
    border-bottom: 2px solid #ee5a24;
    border-top: 2px solid #ee5a24;
    transition: 1s;
  }
}
</style>
