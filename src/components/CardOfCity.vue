<template>
  <div id="card">
    <v-card
        class="mx-auto"
        max-width="344"
        v-for="(city, index) of getDataOfCity" :key="city.id"
    >
        <v-list-item-avatar class="brown lighten-3">
          <v-img
              class="elevation-6"
              alt=""
              :src="`http://www.openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`"
          ></v-img>
        </v-list-item-avatar>

        <v-icon color="green darken-1" @click="updateData(city.name)">
          mdi-backup-restore
        </v-icon>
      <v-btn class="del"
          color="red darken-4"
          text
          @click="deleteCity(index)"
      >
        X
      </v-btn>
        <v-card-title>
          {{ city.name }}
        </v-card-title>
      <v-card-subtitle>
        <p class="description"> {{ city.weather[0].description }} </p>
      </v-card-subtitle>
      <v-card-text>
        <p>Temperature: {{ +city.main.temp.toFixed() }} &#8451;</p>
        <p>Feels like: {{ +city.main.feels_like.toFixed() }} &#8451;</p>
      </v-card-text>
      <v-card-actions>
        <router-link :to="`/info/${city.id}-${city.name.toLowerCase()}`"> <v-btn
            elevation="2"
        >Read More</v-btn></router-link>


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
            <p>MIN Temperature: {{ +city.main.temp_min.toFixed() }} &#8451;</p>
            <p>MAX Temperature: {{ +city.main.temp_max.toFixed() }} &#8451;</p>
            <p>Pressure: {{ city.main.pressure }} hPa</p>
            <p>Humidity: {{ city.main.humidity }} %</p>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "CardOfCity",
  computed: {
    ...mapGetters(['getDataOfCity'])
  },
  data() {
    return {
      idActiveBlock: false
    }
  },
  methods: {
    deleteCity(index) {
      this.$store.dispatch('deleteCity', index)
    },
    showMoreInfo(id) {
      this.idActiveBlock !== id ? this.idActiveBlock = id : this.idActiveBlock = false
    },
    updateData(upCity) {
      this.$store.dispatch('updateData', upCity)
    }
  }
}
</script>

<style scoped lang="scss">
#card {
 .v-card {
   margin: 30px 0;
   position: relative;
    .del {
       position: absolute;
       right: 0;
      top: 0;
      font-size: 20px;
      font-weight: 800;
}
   .v-card__title {
     font-size: 26px;
     font-weight: 600;
   }
   .v-card__subtitle{
     font-size: 16px;
   }
   .v-card__text{
    font-size: 16px;
   }
    a {
  text-decoration: none;
  }
 }
}
</style>
