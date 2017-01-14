<template>
  <nav class="pagination is-centered">
    <ul class="pagination-list">
      <li v-for="page, key in pages">
        <link-to :url="page" class="pagination-link">
          {{ key | capitalize }}
        </link-to>
      </li>
    </ul>
  </nav>
</template>

<script>
import Vue from 'vue'
import LinkTo from './LinkTo'

export default Vue.component('Navbar', {
  props: ['pages'],
  components: {
    LinkTo
  },
  filters: {
    capitalize (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
})
</script>
