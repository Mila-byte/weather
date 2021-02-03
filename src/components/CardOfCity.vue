<template>
<div id="card">
<p>Name: {{ city }} </p>
<p>Temp: {{ temp }}</p>
  <input type="button" value="X" @click="deleteCity">
</div>
</template>

<script>
export default {
  name: "AddOfCity",
  props: [
      'nameCity'
  ],
  data() {
    return {
      city: this.nameCity.city,
      temp: this.nameCity.temp
    }
  },
  methods: {
    deleteCity () {
        this.$emit('deleteCity', this.nameCity.id)
    }
  }
}
</script>

<style scoped>

</style>
