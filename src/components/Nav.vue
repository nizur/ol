<template>
  <ul id="navigation">
    <li v-if="pages.first"><Link :url="pages.first" content="First"></li>
    <li v-if="pages.prev"><Link :url="pages.prev" content="Prev"></li>
    <li v-if="pages.next"><Link :url="pages.next" content="Next"></li>
    <li v-if="pages.last"><Link :url="pages.last" content="Last"></li>
  </ul>
</template>

<script>
import Vue from 'vue'
import Link from './Link'

export default Vue.component('Nav', {
  props: ['pages'],
  components: {
    Link
  }
})
</script>

<style scoped>

</style>
