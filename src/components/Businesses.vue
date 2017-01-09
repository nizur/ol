<template>
  <div class="businesses">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="business in businesses" track-by="id">{{business.name}}</li>
    </ul>

    <ul>
      <li v-for="page in pages">{{page}}</li>
    </ul>
  </div>
</template>

<script>
import * as data from '../assets/businesses'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Businesses',
      businesses: data.businesses,
      pages: data.pages
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
