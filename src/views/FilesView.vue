<template lang="pug">
  main.main
     .main_header 
       span.main_header_title {{filesHeader}}
     ul.img_container
       li.img_file_name(v-for="el in setOfImgs") {{el}}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { imgBox } from "../components/data";
import { vxm } from "@/store/store";

@Component({
  name: "FilesView"
})
export default class FilesView extends Vue {
  filesHeader = "FILES";
  setOfImgs: string[] = imgBox;
}
</script>

<style lang="scss" scoped>
@import "../styles/globalstyle.scss";



.img_container {
  text-align: left;
  display: flex;
  flex-direction: column;
  .img_file_name {
    margin-top: 2px;
    transition: 0.2s;
    padding: 10px 0 10px 10px;
    text-align: left;
    color:$dark-grey;
    background-color: $light-grey;
    border: 2px solid $light-grey;
    border-radius: 9px;
  }
   .img_file_name:hover {
     margin-left: 10px;
      border: 2px solid white;
 }
}

.main {
  display: flex;
  flex-direction: column;
  padding: 35px 30px 30px 30px;
  margin-top: 30px;
  width: 640px;
  border-radius: 9px;
  background-color: white;
  .main_header {
    text-align: left;
    color: $dark-grey;
    .main_header_title {
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
