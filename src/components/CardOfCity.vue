<template>
  <div id="card">
    <v-card
        class="mx-auto"
        max-width="344"
        v-for="(city, index) of getDataOfCity" :key="city.id"
    >

      <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
      >
        <v-list-item-avatar color="grey darken-3">
          <v-img
              class="elevation-6"
              alt=""
              :src="`http://www.openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`"
          ></v-img>
        </v-list-item-avatar>
        <v-btn
            color="orange lighten-2"
            text
            @click="deleteCity(index)"
        >
          Read more
        </v-btn>
        <v-icon color="orange darken-2" @click="updateData(city.name)">
          mdi-backup-restore
        </v-icon>
        <v-card-title>
          {{ city.name }}
        </v-card-title>
      </v-img>
      <v-card-subtitle>
        Temp: {{ +city.main.temp.toFixed() }} &#8451;
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
            color="orange lighten-2"
            text
        >
          Read more
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
            icon
            @click="showMoreInfo(city.id)"
        >
          <v-icon>{{ idActiveBlock === city.id ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="idActiveBlock === city.id">
          <v-divider></v-divider>

          <v-card-text>
            <p>Temp: {{ +city.main.temp.toFixed() }} &#8451;</p>
            <p>Name: {{ city.name }}</p>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "AddOfCity",
  computed:{
    ...mapGetters(['getDataOfCity'])
  },
  data () {
    return {
      idActiveBlock: false
    }
  },
  methods: {
    deleteCity (index) {
      this.$store.dispatch('deleteCity', index)
    },
    showMoreInfo (id) {
      this.idActiveBlock !== id ? this.idActiveBlock = id : this.idActiveBlock = false
    },
    updateData (upCity) {
      this.$store.dispatch('updateData', upCity)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
