<template>
  <div id="app">
    <businesses></businesses>
  </div>
</template>

<script>
import Businesses from './components/Businesses'

export default {
  name: 'app',
  components: {
    Businesses
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
