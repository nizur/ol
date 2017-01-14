<template>
  <div class="container">
    <h2 class="title is-2 has-text-centered">{{ business.name }}</h2>
    <nav class="pagination">
      <ul class="pagination-list">
        <li>
          <router-link to="/" class="pagination-link">Back</router-link>
        </li>
      </ul>
    </nav>
    <div v-html="businessInfo" class="content"></div>
    <nav class="pagination">
      <ul class="pagination-list">
        <li>
          <router-link to="/" class="pagination-link">Back</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Navbar from './Navbar'

export default Vue.component('Business', {
  components: {
    Navbar
  },
  data () {
    return {
      business: this.business,
      businessId: this.$route.params.id,
      pages: {
        back: '/'
      }
    }
  },
  computed: {
    businessInfo: function () {
      const data = []

      for (let property in this.business) {
        data.push(`<p><strong>${property}</strong>: ${this.business[property]}</p>`)
      }

      return data.join('')
    },
    ...mapGetters({
      business: 'getBusiness'
    })
  },
  created () {
    this.$store.dispatch('fetch', {
      action: 'FETCH_BUSINESS',
      url: `businesses/${this.businessId}`
    })
  }
})
</script>
