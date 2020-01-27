<template lang="pug">
  .details_wrap
    TaskAddModal(
                 v-if="typeModalRequest == 'Add'"
                 v-on:sendAddedTask="sendAddedTask"
                 v-on:closeModal="sendCancelForm"
    )
    TaskDetailsModal(
                v-if="typeModalRequest == 'Edit'"
                v-bind:targetTask="currentTask"
                v-on:closeModal="sendCancelForm"
                v-on:sendEditedTask="resendEditedTask"
    )
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import TaskDetailsModal from "../components/layouts/TaskDetailsModal.vue";
import TaskAddModal from "../components/layouts/TaskAddModal.vue";
import Task from "../variables/Task";

@Component({
  name: "LayoutModal",
  components:{
      TaskAddModal,
      TaskDetailsModal
  }
})
export default class LayoutModal extends Vue {
  @Prop() targetTask!: Task;
  @Prop({default: ""}) typeModal!: string;
  typeModalRequest = this.typeModal;
  currentTask = this.targetTask;

  $refs!: {
    taskName: HTMLFormElement;
    taskDeadline: HTMLFormElement;
    taskDescription: HTMLFormElement;
  };
  buttonSave: string = "Save";
  buttonValue: string = "Edit";
  flagShowSave: boolean = false;
  keyEdit = true;

  resendEditedTask(updatedTask:any) {
    this.$emit("sendEditedTask", updatedTask);
  }
  
  sendAddedTask(newTask:any) {
      this.$emit("sendAddedTask", newTask );
  }

  sendCancelForm(){
      this.$emit("closeModal"); 
  }
}
</script>


<style lang="scss" scoped>
@import "../styles/globalstyle.scss";

.details_wrap {
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  padding-top: 40px;
}
</style>