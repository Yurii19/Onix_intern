<template>
  <div class="header">
    <header class="head">
      <div class="head_title_row">
        <div class="title_header">
          <h1>Website Redesign</h1>
          <div class="title_button button_threepoint">
            <a href="#" class="dotts">&#9679;&#9679;&#9679;</a>
          </div>
        </div>
        <div class="header-right-bock">
          <div class="logo_user oser_one">
            <div class="logo_user_wrap"></div>
          </div>
          <div class="logo_user user_two">
            <div class="logo_user_wrap"></div>
          </div>
          <div class="logo_user user_three">
            <div class="logo_user_wrap"></div>
          </div>
          <div class="title_button title_button_share">
            <span class="button_share">Share</span>
          </div>
          <div class="title_button title_button_chat">
            <span class="button_chat">
              <i class="fa fa-comments"></i>Chat
            </span>
          </div>
        </div>
      </div>
      <div class="head-nav">
        <ul v-on:click="handleTask" class="main-menu">
          <li class="main-menu_item">
            <a href="#">Tasks</a>
          </li>
          <li class="main-menu_item">
            <a href="#">Kanban</a>
          </li>
          <li class="main-menu_item">
            <a href="#">Activity</a>
          </li>
          <li class="main-menu_item">
            <a href="#">Calendar</a>
          </li>
          <li class="main-menu_item">
            <a href="#">Files</a>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "mainHeader",
  data: function() {
    return {};
  },
  methods: {
    handleTask: function() {
      return [
        {
          name: "Learn scss",
          description: "Internet resources should be used",
          time: new Date("27/11/2019")
        },
        {
          name: "To do homework",
          description: "To use the following mechanisms: variables, nesting, mixins, and selector inheritance",
          time: new Date("28/11/2019")
        },
        {
          name: "Upload Homework to github",
          description: "Inform this mentor",
          time: new Date("30/11/2019")
        }
      ];
    }
  }
};
</script>

<style lang="scss">
@import "../styles/globalstyle.scss";
.header {
  display: flex;
  flex: 1;
}
a {
  text-decoration: none;
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
    padding-left: 0;
    .main-menu_item {
      margin-left: 30px;
      a {
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