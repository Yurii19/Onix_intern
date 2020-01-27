<template lang="pug">
    layout.layout
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Layout from "./components/Layout.vue";

@Component({
  components: {
    Layout
  }
})

export default class App extends Vue {
}
</script>

<style lang="scss">
  body {
   margin:0;
   padding: 0;
 }

</style>
