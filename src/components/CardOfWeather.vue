<template>
<div id="info">
  <p><label for="city">Write city:</label></p>
  <input type="text" id="city" v-model="city">
  <input type="button" value="search" @click="getDataOfWeather">
  <div class="card" v-if="showCard">
    <p class="nameOfCity">City: {{ city }}</p>
    <p class="temp">Temperature: {{ temp }}</p>
  </div>

</div>
</template>

<script>
export default {
  name: "CardOfWeather",
  data () {
    return {
      city: '',
      temp: '',
      showCard: false
    }
  },
  methods: {
    async getDataOfWeather () {
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=fdc5c7b31d822cd909a6ffa9fab71737`)
          .then(res => res.json())
          .then(res => {
            if (res.cod >= 400 && res.cod < 500) {
              this.city = res.message
            } else if (res.cod === 200) {
              this.temp = +res.main.temp.toFixed()
            }
          })
      this.showCard = true
    }
  }
}
</script>

<style scoped lang="scss">
$white: #fff;
$brown: #351b1b;
#info{
  label{
    font-size: 20px;
    font-weight: 600;
  }
  input{
    margin-top: 15px;
    padding: 5px;
    &[type="text"] {
      outline: none;
      font-size: 18px;
    }
    &[type="button"]{
      font-size: 18px;
      cursor: pointer;
      &:hover{
        background: $brown;
        color: $white;
      }
    }
  }
}

</style>
