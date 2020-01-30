<template lang="pug">
   
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Mixins } from 'vue-property-decorator';
import Task from "@/variables/Task";

@Component({
  name: "MixinComponent"
})
export default class MixinComponent extends Vue {
  showModal: boolean = false;
  mixinReport = 'Hello world from : ' + this.$options.name;
  currentPage: Task [] = [];
  taskToEdit: Task | null = null;

  closeModal(updatedTask: any) {
    this.showModal = false;
  }

  selectTask(event: any) {
    if (event.target) {
      let temp = event.target.id;
      const result = this.currentPage.find(element => element.id == temp);
      if (result) {
        this.taskToEdit = result;
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>