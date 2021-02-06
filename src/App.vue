<template>
  <div id="app">
    <v-app id="inspire">
      <h1>Weather app</h1>
      <v-container class="col-sm-10 col-lg-6">
        <router-view></router-view>
      </v-container>
    </v-app>

  </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    if (localStorage.getItem('cities')) {
      this.$store.dispatch('setCities')
      this.getGeolocation()
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import "assets/reset.css";

$white: #fff;
$brown: #351b1b;
#app {
  h1 {
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    padding: 30px 0;
    background: $brown;
    color: $white;
    text-transform: uppercase;
    font-family: "Bookman Old Style", sans-serif;
  }
}
</style>
