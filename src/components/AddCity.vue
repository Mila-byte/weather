<template>
<div id="add">
  <label for="city">Name</label>
  <input type="text" v-model="city" id="city">
  <input type="button" value="+" @click="addCity">
</div>
</template>

<script>
export default {
  name: "CardOfWeather",
  data () {
    return {
      city: '',
      temp: '0'
    }
  },
  methods: {
    addCity () {
      if(this.city) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=fdc5c7b31d822cd909a6ffa9fab71737`)
            .then(res => res.json())
            .then(res => {
              if (res.cod >= 400 && res.cod < 500) {
                this.city = res.message
              } else if (res.cod === 200) {
                let temperature = res.main.temp
                this.$emit('addCity', {city: this.city, temp: temperature})
                this.city = ''
                this.temp = '0'
              }
            })
      }

    }
  }
}
</script>

<style scoped lang="scss">

</style>
