<template lang="pug">
  main.main
     LayoutModal(
        v-if="showModal"
        v-bind:targetTask="taskToShow" 
        v-on:closeModal="closeModal"
        v-bind:typeModal="typeModal"
        )
     .main_header 
       span.main_header_title {{monthName}}     {{currentYear}}
     table
      tr.week_days
        td.week_day(v-for="(el, ind) in week") {{week[ind]}}
      tr.month_days(v-for='n in 6')
        td.month_day(v-for='m in 7' @click="getDateFromDay" v-bind:class="monthContainer[m + 7*(n-1)] | cellFilter ") {{ monthContainer[m + 7*(n-1)] }}
     .controls
       input.slider(type="button" v-model='buttonPrev' v-on:click="getPrevMonth")
       input.slider(type="button" v-model='buttonNext' v-on:click="getNextMonth")    
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Task from "../variables/Task";
import { vxm } from "../store/store";
import LayoutModal from "../components/LayoutModal.vue";
import moment from "moment";
import axios from "axios";

import { tasksReq } from "../service/api";

@Component({
  name: "CalendarView",
  components: {
    LayoutModal
  },
  filters: {
    cellFilter: function(el: any) {
      if (!el) {
        return "empty";
      }
    }
  }
})
export default class CalendarView extends Vue {
  week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  currentYear = 2020;
  storeTasks = vxm.tasks.dataValue;
  tempStore = vxm.tasks;
  typeModal = "";
  taskToShow = null;
  buttonNext = ">";
  buttonPrev = "<";
  currentMonth = moment().format("MM");
  showModal = false;

  tempMes = null;

  beforeCreate() {
    // this.tempStore.getRemoteData();
  }

  mounted() {
    //this.tempStore.getRemoteData();
    //this.tempStore.getRemoteData();
  }
beforeUpdate() {
  //alert('Calendar beforeUpdate');
}
  updated() {
  }

  presentDay(day: any) {
    let dayNumber = day.length > 1 ? "0" + day : day;
    const present = moment().format("YYYY-MM-DD");
    const theDay = this.currentYear.toString() + this.currentMonth + dayNumber;
    if (present == theDay) {
      return "present";
    } else {
      return "";
    }
  }

  get monthName() {
    return moment(this.currentMonth, "MM")
      .format("MMMM")
      .toUpperCase();
  }

  get firstDayInWeek() {
    return this.currentYear + "-" + this.currentMonth + "-01";
  }

  get offsetInWeek() {
    let temp = moment(this.firstDayInWeek).format("d");
    const res = parseInt(temp) == 0 ? 7 : temp;
    return res.toString();
  }

  get monthSize() {
    return moment(
      this.currentYear + "-" + this.currentMonth,
      "YYYY-MM"
    ).daysInMonth();
  }

  getPrevMonth() {
    //alert(this.currentMonth);
    let temp = 0;
    if (parseInt(this.currentMonth) > 1) {
      temp = parseInt(this.currentMonth) - 1;
      this.currentMonth =
        temp.toString().length < 2 ? "0" + temp.toString() : temp.toString();
    }
    // temp = parseInt(this.currentMonth) - 1;
  }

  getNextMonth() {
    // alert(this.currentMonth);
    let temp = 0;
    if (parseInt(this.currentMonth) < 12) {
      temp = parseInt(this.currentMonth) + 1;
      this.currentMonth =
        temp.toString().length < 2 ? "0" + temp.toString() : temp.toString();
    }
    // temp = parseInt(this.currentMonth) + 1;
  }

  closeModal() {
    this.showModal = false;
  }

  getDateFromDay(e: Event) {
    const targDay = e.target as HTMLElement;
    const arrFrommCell = targDay.innerHTML.split(" ");
    const day = arrFrommCell[0];
    if (targDay && arrFrommCell[1]) {
      const dd = day.length > 1 ? day : "0" + day;
      const dayString = this.currentYear + "-" + this.currentMonth + "-" + dd;
      const res = this.storeTasks.find(
        (el: any) =>
          moment(parseInt(el.created)).format("YYYY-MM-DD") === dayString
      );
      this.taskToShow = res;
      this.showModal = true;
      this.typeModal = "Show";
    }
  }

  get calendarHeader() {
    return this.currentMonth.toUpperCase();
  }

  get monthContainer() {
    let monthContainer: string[] = [];
    for (let i = 1; i < this.monthSize + 1; i++) {
      let sValue = this.attachTask(i.toString());
      monthContainer.push(i.toString() + " " + sValue);
    }
    for (let i = 0; i < parseInt(this.offsetInWeek); i++) {
      monthContainer.unshift("");
    }
    return monthContainer;
  }

  attachTask(theDay: string) {
    let res = "";
    let localDay = theDay.length > 1 ? theDay : "0" + theDay;
    const dayOfMonth =
      this.currentYear + "-" + this.currentMonth + "-" + localDay;
    this.storeTasks.forEach((el: any) => {
      // alert(moment(el.created).format("YYYY-MM-DD") + ' -> '+ dayOfMonth);
      if (moment(parseInt(el.created)).format("YYYY-MM-DD") == dayOfMonth) {
        res = el.name;
      }
    });
    return res;
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/globalstyle.scss";

.slider {
  // border-radius: 9px;
  padding: 0 10px 0 10px;
  outline: none;
  //border-style: none;
  font-size: 1.6em;
  opacity: 0.5;
  cursor: pointer;
}
.slider:hover {
  opacity: 1;
  transition: 0.5s;
}

.week_days {
  display: flex;
  flex: 1;
  //border: 1px solid rgb(89, 0, 255);
  justify-content: space-around;
  margin-bottom: 30px;
  .week_day {
    opacity: 0.7;
    padding: 5px;
  }
}
.month_days {
  display: flex;
  flex: 1;
  .month_day {
    transition: 1s;
    height: 40px;
    display: flex;
    font-size: 0.7em;
    color: $dark-grey;
    padding: 5px;
    text-align: left;
    flex: 1;
    border: 1px solid white;
    background-color: $light-grey;
  }
  .empty {
    background-color: rgb(212, 141, 141);
  }
  .month_day:hover {
    background-color: #c7ecee;
    transition: 0.4s;
  }
}

.main {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  padding: 35px 0 30px 0;
  margin-top: 30px;
  width: 700px;
  border-radius: 9px;
  background-color: white;
  //border: 1px solid red;
  .main_header {
    text-align: left;
    color: $dark-grey;
    display: flex;
    .main_header_title {
      display: block;
      margin-left: 30px;
      margin-bottom: 35px;
      color: $dark-grey;
      // background-color: cyan;
    }
  }
}

@media (max-width: 700px) {
  .main {
    width: 400px;
  }
}
</style>
