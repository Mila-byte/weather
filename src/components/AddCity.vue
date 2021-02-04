<template>
  <v-card
      tile
  >
    <v-text-field label="City" v-model="city" @keyup.enter="addCity"></v-text-field>
    <v-btn
        elevation="2"
        medium
        @click="addCity"
    >Search
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "AddCity",
  data() {
    return {
      city: ''
    }
  },
  methods: {
    addCity() {
      this.$store.dispatch('addCity', this.city)
      this.city = ''
    }
  }
}
</script>

<style scoped lang="scss">

</style>
