<template>
  <ul id="navigation">
    <li><LinkTo v-if="pages.first" :url="pages.first" className="first" content="First"></li>
    <li><LinkTo v-if="pages.prev" :url="pages.prev" className="prev" content="Prev"></li>
    <li><LinkTo v-if="pages.next" :url="pages.next" className="next" content="Next"></li>
    <li><LinkTo v-if="pages.last" :url="pages.last" className="last" content="Last"></li>
  </ul>
</template>

<script>
import Vue from 'vue'
import LinkTo from './LinkTo'

export default Vue.component('NavBar', {
  props: ['pages'],
  components: {
    LinkTo
  }
})
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  padding: 0;

  li {
    list-style: none;
    margin: 0 1rem;
    width: 10rem;
  }
}

</style>
