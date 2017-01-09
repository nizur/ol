<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar :pages="pages"/>
    <Businesses :businesses="businesses"/>
    <Navbar :pages="pages"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from './components/Navbar'
import Businesses from './components/Businesses'

export default {
  name: 'app',
  data() {
    return {
      title: 'Businesses'
    }
  },
  components: {
    Businesses,
    Navbar
  },
  computed: mapGetters({
    businesses: 'getBusinesses',
    pages: 'getPages'
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
