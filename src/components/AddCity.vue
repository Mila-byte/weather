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
      city: ''
    }
  },
  methods: {
    addCity () {
      this.$store.dispatch('addCity', this.city)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
