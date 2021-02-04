<template>
<div id="info">
  <router-link to="/"> <v-btn
      color="orange lighten-2"
      text
  >
   Back
  </v-btn></router-link>
<p> {{temp}}</p>
<p> {{name}}</p>
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
          break
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
#info {
  background: brown;
  height: 1200px;
}
</style>
