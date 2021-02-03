<template>
  <div id="app">
    <v-app id="inspire">
    <h1>Weather-app using a Vue.js</h1>
    <v-container class="col-sm-10 col-lg-6">
      <AddCity/>
      <CardOfCity />
    </v-container>
    </v-app>
  </div>
</template>

<script>
import AddCity from "@/components/AddCity";
import CardOfCity from "@/components/CardOfCity";

export default {
  name: 'App',
  components: {AddCity, CardOfCity},
  created() {
    if(localStorage.getItem('cities')){
      this.$store.dispatch('setCities')
    }
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
  }
}
</style>
