<template>
  <div id="app">
    <h1>Weather-app using a Vue.js</h1>
    <div class="container">

      <CardOfWeather />
    </div>
  </div>
</template>

<script>

import CardOfWeather from "@/components/CardOfWeather";
export default {
  name: 'App',
  components: {CardOfWeather}
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
  .container {
    padding: 15px;
    width: 1200px;
    margin: 0 auto;

    }
  }
</style>
