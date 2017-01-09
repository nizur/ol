<template>
  <a :href="link">{{content}}</a>
</template>

<script>
import Vue from 'vue'

const olApiUrl = 'http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses'

export default Vue.component('Link', {
  props: [
    'id',
    'url',
    'content'
  ],
  computed: {
    link: function() {
      return this.id ? `${olApiUrl}/${this.id}` : this.url
    } 
  }
})
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
