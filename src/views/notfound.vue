<template lang="pug">
  div.wrap
      h1 404
      h2 Page not found
</template>


<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  name: "NotFound"
})
export default class NotFound extends Vue {}
</script>


<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>