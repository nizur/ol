<template>
  <div class="businesses">
    <ul>
      <li v-for="business in businesses" track-by="id">
        <LinkTo :id="business.id" :content="business.name">
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import LinkTo from './LinkTo'

export default Vue.component('Businesses', {
  props: ['businesses'],
  components: {
    LinkTo
  }
})
</script>

<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;

  li {
    margin: 0 10px;
  }
}

</style>
