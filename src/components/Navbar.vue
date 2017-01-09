<template>
  <ul id="navigation">
    <li v-if="pages.first"><LinkTo :url="pages.first" content="First"></li>
    <li v-if="pages.prev"><LinkTo :url="pages.prev" content="Prev"></li>
    <li v-if="pages.next"><LinkTo :url="pages.next" content="Next"></li>
    <li v-if="pages.last"><LinkTo :url="pages.last" content="Last"></li>
  </ul>
</template>

<script>
import Vue from 'vue'
import LinkTo from './LinkTo'

export default Vue.component('Nav', {
  props: ['pages'],
  components: {
    LinkTo
  }
})
</script>

<style scoped>
ul {
  padding: 0;
}

li {
  display: inline;
  list-style: none;
}
</style>
