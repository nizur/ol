<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Nav :pages="pages"/>
    <Businesses :businesses="businesses"/>
    <Nav :pages="pages"/>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Businesses from './components/Businesses'
import * as data from './assets/businesses'

export default {
  name: 'app',
  data() {
    return {
      title: 'Businesses',
      businesses: data.businesses,
      pages: data.pages
    }
  },
  components: {
    Businesses,
    Nav
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
