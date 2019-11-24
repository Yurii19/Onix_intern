<template>
  <div class="left_container" id="sidebar">
    <aside class="column">
      <div class="aside_header">
        <div class="aside-title">
          <span class="aside-title_text">PROJECTUS</span>
          <div class="button-search">
            <i class="fa fa-search"></i>
          </div>
        </div>
      </div>

      <div class="user">
        <div class="user_block">
          <div class="user_block_avatar"></div>
          <div class="user_block_wrap">
            <span class="user_block_name">Jean Gonzales</span>
            <span class="user_block_status">Product Owner</span>
          </div>
          <div class="user_block_menu">
            <a href="#" class="dotts">&#9679;&#9679;&#9679;</a>
          </div>
        </div>
        <div class="user-stats">
          <div v-on:click="handleTask" class="completed-tasks" id="complited">
            <span class="value" id="complited-tasks-value">{{completed}}</span>
            <span class="state">Complited Tasks</span>
          </div>
          <div class="open-tasks" id="open-tasks">
            <span class="value" id="open-tasks-value">{{open}}</span>
            <span class="state">Open Tasks</span>
          </div>
        </div>
      </div>

      <div class="aside-menu">
        <div class="aside-menu_wrap">
          <ul class="aside-menu_list">
            <li class="aside-menu_item aside-menu_title">MENU</li>
            <li class="aside-menu_item">
              <a href="#">Home</a>
            </li>
            <li class="aside-menu_item">
              <a href="#">My tasks</a>
            </li>
            <li class="aside-menu_item aside-menu_items_3" id="notifications">
              <a href="#" class="link-notification">Notifications</a>
              <span class="notifications_number" id="notifications_value">{{numberOfNotifications}}</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {

  name: "sidebar",
  props: {
     numberOfNotifications: Number
  },
  data: function() {
    return {
      completed: 372,
      open: 11,
      confirmQuestion: "Are you sure you want to change the number of tasks?",
      userName: "Jean Gonzales",
      userStatus: "Product Owner",
    };
  },
  methods: {
    handleTask: function() {
      if (this.open > 0) {
        confirm(this.confirmQuestion);
        this.completed++;
        this.open--;
      }
    }
  }
};
</script>

<style lang="scss">
@import "globalstyle.scss";

.aside-title::before {
  @include pseudoelement("../assets/Logo@3x.svg");
  width: 21.6px;
  height: 18.9px;
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
    // flex: 1;
    justify-content: space-between;
    .user_block_avatar {
      background-image: url("../assets/hb.jpg");
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-size: cover;
    }
    .user_block_wrap {
      // margin: 5px 0 5px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 60%;
      // border: 1px solid cyan;
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
    .aside-menu_items_3 {
      .notifications_number {
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
    }
  }
}
</style>