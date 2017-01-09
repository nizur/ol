import Vue from 'vue'
import Vuex from 'vuex'
import businesses from './modules/businesses'
import pages from './modules/pages'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    businesses,
    pages
  },
  strict: debug
})
