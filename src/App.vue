<template>
  <div id="app">
    <Im/>
  </div>
</template>

<script>
import Im from './components/Im.vue'

export default {
  name: 'App',
  components: {
    Im
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
