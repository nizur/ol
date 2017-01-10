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
  name: 'App',
  data () {
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
  }),
  created () {
    this.$store.dispatch('fetch', {
      action: 'FETCH',
      url: 'businesses'
    })
  }
}
</script>

<style>
body {
    background-color: #2e2b43;
    color: #fff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  color: #fff;
  text-transform: uppercase;
}
</style>
