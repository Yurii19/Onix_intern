<template lang="pug">
  #sidebar.left_container
   aside.column
    .aside_header
      .aside-title
        span.aside-title_text PROJECTUS
        .button-search
          i.fa.fa-search
    .user
      .user_block
        .user_block_avatar
        .user_block_wrap
          span.user_block_name {{userName}}
          span.user_block_status {{userStatus}}
        .user_block_menu
          a.dotts(href='#') &#x25CF;&#x25CF;&#x25CF;
      .user-stats
        #complited.completed-tasks
          span#complited-tasks-value.value {{numberOfCompletedTasks}}
          span.state Complited Tasks
        #open-tasks.open-tasks
          span#open-tasks-value.value {{numberOfMyTasks}}
          span.state Open Tasks
    .aside-menu
      .aside-menu_wrap
        ul.aside-menu_list
          li.aside-menu_item.aside-menu_title MENU
          li.aside-menu_item
            a(href='#') Home
          li.aside-menu_item
            router-link(to="/tasks") My tasks
          li#notifications.aside-menu_item.aside-menu_items_3
            a.link-notification(href='#') Notifications
            span#notifications_value.indicator {{numberofnotifications}}

</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { dataTasks, dataActivity } from "../components/data"; 
import { Prop, Watch } from 'vue-property-decorator';

@Component({
  name: "SideBlock",
})
export default class AsideBar extends Vue {
@Prop({default: 0}) numberOfMyTasks: number|undefined;
@Prop({default: 0}) numberofnotifications: number|undefined;
@Prop({default: 0}) numberOfCompletedTasks: number|undefined;
  // confirmQuestion: string =
  //   "Are you sure you want to change the number of tasks?";
  userName: string = "Jean Gonzales";
  userStatus: string = "Product Owner";
}
</script>

<style lang="scss">
@import "../styles/globalstyle.scss";

.aside-title::before {
  @include pseudoelement("../assets/Logo@3x.svg");
  width: 21.6px;
  height: 18.9px;
}
.indicator {
  margin-bottom: 3px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $background-yellow;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: #131313;
}
li {
  list-style-type: none;
}
.left_container {
  font-family: Helvetica, sans-serif;
  background-color: black;
  width: 270px;
  .column {
    height: 100vh;
  }
}
.aside_header {
  padding-left: 30.4px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 84px;
  .aside-title {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    .aside-title_text {
      width: 68%;
      text-align: left;
      color: white;
    }
    .button-search {
      color: $dark-grey;
      display: inline-block;
      width: 20px;
      height: 20px;
    }
  }
}

.user {
  .user_block {
    background-color: $light-black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10%;
    padding-right: 20px;
    height: 80px;
    color: white;
    justify-content: space-between;
    .user_block_avatar {
      background-image: url("../assets/hb.jpg");
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-size: cover;
    }
    .user_block_wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 60%;
      .user_block_name {
        margin-bottom: 2px;
        text-align: left;
        font-size: 0.9em;
        display: inline-block;
      }
      .user_block_status {
        margin-top: 2px;
        text-align: left;
        font-size: 0.8em;
        color: $dark-grey;
      }
    }
    .user_block_menu {
      color: $light-grey;
      .dotts {
        font-size: 0.7em;
        color: $dark-grey;
      }
    }
  }
  .user-stats {
    padding-left: 30.4px;
    padding-right: 20px;
    margin-top: 20px;
    display: flex;
    color: white;
    .open-tasks {
      flex: 1;
      .value {
        text-align: left;
        display: block;
      }
      .state {
        color: $dark-grey;
        text-align: left;
        font-size: 0.8em;
        display: block;
      }
    }
    .completed-tasks {
      cursor: pointer;
      flex: 1;
      .value {
        text-align: left;
        display: block;
      }
      .state {
        color: $dark-grey;
        text-align: left;
        font-size: 0.8em;
        display: block;
      }
    }
  }
}
.aside-menu_wrap {
  margin-left: 30px;
  font-size: 0.9em;
  color: white;
  .aside-menu_list {
    padding-left: 0;
    .aside-menu_title {
      color: $dark-grey;
      text-align: left;
    }
    .aside-menu_item {
      min-height: 38.1px;
      display: flex;
      align-items: center;
      a {
        color: white;
        font-weight: 200;
      }
    }
    // .aside-menu_items_3 {
    // }
  }
}
</style>