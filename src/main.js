// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import store from './store'
import router from './router'

Vue.use(VueResource)

// Setting root here so we can use relative URLs elsewhere
Vue.http.options.root = 'http://ec2-54-84-251-148.compute-1.amazonaws.com'

/* eslint-disable no-new */
window.ol = new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router,
  store
})
