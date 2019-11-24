<template>
  <ul>
	<li v-for="(el, index) in tasks" :key="index">{{ el }}</li>
  </ul>

</template>

<script>
export default {
  props : ['tasks']
	
}

</script>

<style>
  li{
	background-color: yellow;
  }

</style>