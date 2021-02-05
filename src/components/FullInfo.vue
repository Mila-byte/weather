<template>
<div id="info">
  <router-link to="/">
    <v-btn
        color="accent"
        elevation="2"
        outlined
    >come back</v-btn>
  </router-link>
  <v-card
      class="mx-auto"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ name }}
        </v-list-item-title>
        <v-list-item-subtitle>Mon, 12:30 PM, {{ description }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col
            class="display-3"
            cols="6"
        >
          {{ temp }}&deg;C
        </v-col>
        <v-col cols="6">
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sun.png"
              alt="Sunny image"
              width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>48%</v-list-item-subtitle>
    </v-list-item>
  </v-card>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "FullInfo",
  data() {
    return {
      temp: 0,
      name: ''
    }
  },
  computed: mapState(['arrCity']),
  watch: {
    arrCity: {
      handler: 'setCity',
      deep: true,
      immediate: true
    }
  },
  methods: {
    setCity(cities) {
      let id = parseInt(this.$route.params.name)
      for (let city of cities) {
        if (id === city.id) {
          this.temp = city.main.temp
          this.name = city.name
          this.description = city.weather[0].description
          break
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
#info {
a{
  text-decoration: none;
}
}
</style>
