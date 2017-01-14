<template>
  <a :href="link" v-on:click.prevent.stop="pull">
    <slot></slot>
  </a>
</template>

<script>
import Vue from 'vue'

export default Vue.component('LinkTo', {
  props: [
    'id',
    'url',
    'content',
    'className'
  ],
  computed: {
    link: function() {
      return this.id !== undefined ? `businesses/${this.id}` : this.url
    }
  },
  methods: {
    pull: function(e) {
      this.$store.dispatch('fetch', {
        action: 'FETCH',
        url: e.target.href
      })
    }
  }
})
</script>
