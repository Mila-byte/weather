<template>
  <div id="app">
    <h1>Weather-app using a Vue.js</h1>
    <div class="container">
    <AddCity @addCity="addCity"/>
      <CardOfCity
          v-for="elCity of arrCity"
          :key="elCity.id"
          :nameCity="elCity"
          @deleteCity="deleteCity"
      />
    </div>
  </div>
</template>

<script>


import AddCity from "@/components/AddCity";
import CardOfCity from "@/components/CardOfCity";
export default {
  name: 'App',
  components: {AddCity, CardOfCity},
  data() {
    return {
      arrCity: [],
      idCity: 0
    }
  },
  methods: {
    addCity(info) {
      this.arrCity.push({
        id: this.idCity++,
        city: info.city,
        temp: info.temp
      })
    },
    deleteCity (id) {
       for (let i = 0; i < this.arrCity.length; i++) {
          if (this.arrCity[i].id === id) {
            this.arrCity.splice(i, 1)
          }
       }
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
  .container {
    padding: 15px;
    width: 1200px;
    margin: 0 auto;

    }
  }
</style>
