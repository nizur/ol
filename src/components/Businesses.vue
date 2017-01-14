<template>
  <div class="container businesses">
    <h2 class="title is-2 has-text-centered">{{ title }}</h2>
    <navbar :pages="pages"/>
    <ul>
      <li v-for="business in businesses">
        <router-link :to="pathObject(business.id)" exact>{{business.name}}</router-link>
      </li>
    </ul>
    <navbar :pages="pages"/>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Navbar from './Navbar'

export default Vue.component('Businesses', {
  components: {
    Navbar
  },
  data () {
    return {
      title: 'Businesses'
    }
  },
  computed: mapGetters({
    businesses: 'getBusinesses',
    pages: 'getPages'
  }),
  methods: {
    pathObject: function (id) {
      return {
        name: 'business',
        params: {id}
      }
    }
  },
  created () {
    this.$store.dispatch('fetch', {
      action: 'FETCH',
      url: 'businesses'
    })
  }
})
</script>
