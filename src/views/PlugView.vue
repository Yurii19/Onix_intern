<template lang="pug">
  div.wrap
      h1 
      h2 Coming soon
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from 'vue';

@Component({
  name: "PlugView",
})
export default class PlugView extends Vue{
    
}
</script>


<style lang="scss" scoped>
.wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>