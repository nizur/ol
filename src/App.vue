<template>
  <section id="app" class="section">
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
h2 {
  font: {
    size: 2rem;
    weight: bold;
  }
}

ul, li {
  list-style: none;
}
</style>
