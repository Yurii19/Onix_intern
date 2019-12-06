<template lang="pug">
  .content
   main.main
    .main_header
      span.main_header_title {{activityTitle}}
      
    .main_paragraph(v-for="action in page")
      p.action_description_1(v-bind:class="action.lable")
        span.action_text {{action.name+action.description}}
        span.action-time {{action.time}}
      .extra-description(v-if="action.extraDescription != ''")
       span.extra-description_text {{action.extraDescription}}

    .uploaded(v-if="loadedflag")
      #pics.uploaded_wrap(v-on:click='getUploadedImg')
        .uploaded_item.uploaded_preview1
        .uploaded_item.uploaded_preview2
        .uploaded_item.uploaded_preview3
        .uploaded_item.uploaded_preview4
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "MainConteiner",
  props: {
    activityTitle: String,
    loadedflag: Boolean,
    page: Array
  }
})
export default class mainConteiner extends Vue {
 
    getUploadedImg(event: any): void {
      const img: HTMLElement = event.target;
      this.$emit("click", img);
  }
}
</script>

<style lang="scss">
@import "../styles/globalstyle.scss";

.content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #eeebe5;

  .done::before {
    @include pseudoelementFA("\f00c");
    background-color: #cef9c6;
  }
  .comment::before {
    @include pseudoelementFA("\f27a");
    background-color: #fff8dd;
  }
  .upload::before {
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
    .main_paragraph {
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