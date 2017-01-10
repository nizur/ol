<template>
  <a :href="link" v-on:click.prevent.stop="pull" :class="className">{{content}}</a>
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

<style lang="scss" scoped>
a {
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #16a086;
  }

  &.first:before {
    content: ' \25C0';
    height: 1rem;
    width: 1rem;
  }

  &.prev:before {
    content: ' \25C0';
    height: 1rem;
    width: 1rem;
  }

  &.next:after {
    content: ' \25B6';
    height: 1rem;
    width: 1rem;
  }

  &.last:after {
    content: ' \25B6\25B6';
    height: 1rem;
    width: 1rem;
  }
}
</style>
