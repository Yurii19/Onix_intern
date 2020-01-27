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
          router-link(v-bind:to="item.route") {{item.name}}
            span.lwrp

</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { dataTasks, dataActivity } from "./data";

@Component({
  name: "MainHeader"
})
export default class MainHeader extends Vue {
  menu: object[] = [
    { name: "Tasks", route: "/tasks" },
    { name: "Kanban", route: "/kanban" },
    { name: "Activity", route: "/activity" },
    { name: "Calendar", route: "/calendar" },
    { name: "Files", route: "/files" }
  ];
}
</script>

<style lang="scss" scoped>
@import "../styles/globalstyle.scss";
.router-link-active,
.main-menu_item:hover {
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
  display: flex;
  flex-direction: column;
  min-height: 55px;
  .main-menu {
    justify-content: left;
    margin: 0;
    display: flex;
    flex: 1;
    padding-left: 0;
    .main-menu_item {
      display: flex;
      margin-left: 30px;
      a {
        padding-top: 19px;
        color: $dark-grey;
        font-family: verdana;
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
  .main-menu {
    flex-wrap: wrap;
    width: 400px;
    //border: 1px solid blue;
    .main-menu_item {
      margin-bottom: 10px;
    }
  }
}
</style>