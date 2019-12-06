<template lang="pug">
 .header
  header.head
    .head_title_row
      .title_header
        h1 Website Redesign
        .title_button.button_threepoint
          a.dotts(href='#') &#x25CF;&#x25CF;&#x25CF;
      .header-right-bock
        .logo_user.oser_one
          .logo_user_wrap
        .logo_user.user_two
          .logo_user_wrap
        .logo_user.user_three
          .logo_user_wrap
        .title_button.title_button_share
          span.button_share Share
        .title_button.title_button_chat
          span.button_chat
            i.fa.fa-comments
            | Chat
    .head-nav
      ul#menu.main-menu
        li.main-menu_item( v-for="item in menu")
          a(href='#' v-on:click="hadleClick") {{item}}

</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Task from "../variables/task";
import {dataTasks, dataActivity} from "./data";

@Component({
  name: "MainHeader"
})
export default class mainHeader extends Vue {
  menu: any = ["Tasks", "Kanban", "Activity", "Calendar", "Files"];
  
  hadleClick(event: any): void {
    this.tasksData();
    this.getMenuItem(event);
  }

  getMenuItem(event: any) {
    const menuItem: HTMLElement = event.target;
     this.$emit("click", menuItem.innerHTML);
  }

  tasksData(): any {
    return dataTasks;
  }

  activityData(): any {
    return dataActivity;
  }
}
</script>

<style lang="scss">
@import "../styles/globalstyle.scss";
.selected_item {
  border-bottom: 2px solid #ffc200;
}
.header {
  display: flex;
  flex: 1;
}
.head {
  padding-top: 40px;
  display: flex;
  flex: 1;
  flex-direction: column;
}
.title_header::before {
  @include pseudoelement("../assets/Shapes@2x.png");
  width: 40px;
  height: 40px;
  display: inline-block;
  background-color: $background-yellow;
  border-radius: 7px;
  background-size: cover;
}
.fa-comments {
  margin-right: 4px;
}
.head_title_row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 0 30px;
  .title_header {
    width: 450px;
    align-items: center;
    display: flex;
    h1 {
      padding: 0;
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 15px;
    }
    .button_threepoint {
      margin-left: 20px;
      display: flex;
      height: 30px;
      width: 30px;
      justify-content: center;
      align-items: center;
      background-color: $light-grey;
      border-radius: 50%;
      .dotts {
        letter-spacing: 1px;
        font-size: 0.6em;
        color: $dark-grey;
      }
    }
  }
  .header-right-bock {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 280px;
    .logo_user {
      .logo_user_wrap {
        background-image: url("../assets/hb.jpg");
        background-size: cover;
        border-radius: 50%;
        height: 30px;
        width: 30px;
      }
    }
    .title_button {
      margin-left: 10px;
      height: 30px;
      padding: 0 12px 0 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
    }
    .title_button_share {
      background-color: $light-grey;
    }
    .title_button_chat {
      background-color: $light-yellow;
      .button_chat {
        color: $background-yellow;
      }
    }
  }
}
.head-nav {
  .main-menu {
    display: flex;
    align-items: flex-end;
    padding-left: 0;
    .main-menu_item {
      margin-left: 30px;
      a {
        border-bottom: 2px solid white;
        display: inline-block;
        color: $dark-grey;
        font-family: verdana;
      }
      a:hover {
        color: black;
      }
    }
  }
}
@media (max-width: 500px) {
  .head_title_row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .header-right-bock {
    margin-top: 20px;
  }
}
</style>