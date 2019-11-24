<template>
  <div class="content">
    <main class="main">
      <div class="main_header">
        <span class="main_header_title">TODAY</span>
      </div>
      <div class="main_paragraph action_1">
        <p class="action_description_1">
          <span class="action_text">{{actionDone.userName+actionDone.userAction}}</span>
          <span class="action-time">8:40 PM</span>
        </p>
      </div>
      <div class="main_paragraph action_2">
        <p class="action_description_2">
          <span class="action_text">{{actionComment.userName+actionComment.userAction}}</span>
          <span class="action-time">7:32 PM</span>
        </p>
      </div>
      <div class="extra-description">
        <span class="extra-description_text"></span>
      </div>
      <div class="main_paragraph action_3">
        <div class="action_description_3">
          <span class="action_text">{{actionUpload.userName+actionUpload.userAction}}</span>
          <span class="action-time">6:02 PM</span>
        </div>
      </div>
      <!-- <div class="uploaded">
        <div v-on:click="getUploadedImg" class="uploaded_wrap" id="pics">
          <div class="uploaded_item uploaded_preview1"></div>
          <div class="uploaded_item uploaded_preview2"></div>
          <div class="uploaded_item uploaded_preview3"></div>
          <div class="uploaded_item uploaded_preview4"></div>
        </div>
      </div> -->
    </main>
  </div>
</template>

<script>
//const imgs = document.getElementById("pics").children;
export default {
  name: "mainConteiner",
  props: {
    pageTitle: String
  },
  data: function() {
    return {
      // imgs: document.getElementById("pics").children,
      // imgs: document.getElementById("pics").children,
      //  urlDefault: "../assets/hb.jpg",
      uploadedImages: [
        "../assets/Tulips.jpg",
        "../assets/Tulips.jpg",
        "../assets/Tulips.jpg",
        "../assets/Tulips.jpg"
      ],
      actionDone: {
        userName: "Darika Samak ",
        userAction:
          "mark as done Listing on Product Hunt so that we can reach as many potential users"
      },
      actionComment: {
        userName: "Emilee Simchenko ",
        userAction:
          "commented on Account for teams and personal in bottom style",
        extraDescription:
          "During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes"
      },
      actionUpload: {
        userName: "Darika Samak ",
        userAction:
          "uploaded 4 files on An option to search in current projects or in all projects"
      }
    };
  },
  methods: {
    getUploadedImg: function(event) {
      const img = event.target;
      this.$emit('click', img);
    }
  }
};
</script>

<style lang="scss">
@import "globalstyle.scss";

.content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #eeebe5;

  .action_description_1::before {
    @include pseudoelementFA("\f00c");
    background-color: #cef9c6;
  }
  .action_description_2::before {
    @include pseudoelementFA("\f27a");
    background-color: #fff8dd;
  }
  .action_description_3::before {
    @include pseudoelementFA("\f019");
    background-color: #e3efff;
  }
  .main {
    padding: 35px 0 30px 0;
    margin-top: 30px;
    max-width: 700px;
    border-radius: 9px;
    background-color: white;
  }
  .main {
    .main_header {
      text-align: left;
      color: $dark-grey;
      .main_header_title {
        margin-left: 30px;
        color: $dark-grey;
      }
    }
    .action_1 {
      margin-top: 30px;
      .action_description_1 {
        margin: 0 30px 0 30px;
        display: flex;
        .action_text {
          display: inline-block;
          margin-left: 15px;
          width: 70%;
          text-align: left;
        }
      }
    }
    .action_2 {
      margin-top: 30px;
      .action_description_2 {
        margin: 0 30px 0 30px;
        display: flex;
        .action_text {
          display: inline-block;
          margin-left: 15px;
          width: 70%;
          text-align: left;
        }
      }
    }
    .action_3 {
      margin-top: 30px;
      .action_description_3 {
        margin: 0 30px 0 30px;
        display: flex;
        .action_text {
          display: inline-block;
          margin-left: 15px;
          width: 70%;
          text-align: left;
        }
      }
    }
  }
}
.extra-description {
  margin-top: 20px;
  padding: 20px;
  width: 68%;
  margin-left: 90px;
  text-align: left;
  background-color: #eeebe5;
  border-radius: 9px;
  .extra-description_text {
  }
}
.uploaded {
  .uploaded_wrap {
    margin-left: 90px;
    margin-top: 20px;
    display: flex;
    .uploaded_item {
      cursor: pointer;
      height: 100px;
      width: 100px;
      margin-right: 10px;
      border-radius: 10px;
      background-image: url("../assets/Tulips.jpg");
      background-size: cover;
    }
  }
}
.action-time {
  margin-left: auto;
  color: $dark-grey;
  font-size: 0.9em;
}
</style>