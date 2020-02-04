<template lang="pug">
  main.main
     .main_header 
       span.main_header_title {{calendarHeader}}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import FullCalendar from "vue-full-calendar";
import { vxm } from "@/store/store";

@Component({
  //components: {FullCalendar},
  name: "CalendarView"
})
export default class CalendarView extends Vue {
  calendarHeader = "DATE";
}
</script>

<style lang="scss" scoped>
@import "../styles/globalstyle.scss";

.main {
  display: flex;
  flex-direction: column;
  padding: 35px 0 30px 0;
  margin-top: 30px;
  width: 700px;
  border-radius: 9px;
  background-color: white;
  .main_header {
    text-align: left;
    color: $dark-grey;
    .main_header_title {
      margin-left: 30px;
      color: $dark-grey;
    }
  }
}

@media (max-width: 700px) {
  .main {
    width: 400px;
  }
}
</style>
