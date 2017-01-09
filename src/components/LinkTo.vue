<template>
  <a :href="link" v-on:click.prevent.stop="pull">{{content}}</a>
</template>

<script>
import Vue from 'vue'

const olApiUrl = 'http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses'

export default Vue.component('LinkTo', {
  props: [
    'id',
    'url',
    'content'
  ],
  computed: {
    link: function() {
      return this.id ? `${olApiUrl}/${this.id}` : this.url
    } 
  },
  methods: {
    pull: function() {
      console.log(this.href)
    }
  }
})
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
