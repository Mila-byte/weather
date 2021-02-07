<template>
  <div id="info">
    <router-link to="/">
      <v-btn
          color="accent"
          elevation="2"
          outlined
      >back
      </v-btn>
    </router-link>
    <v-card
        class="mx-auto brown lighten-4"
    >
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="headline">
            {{ name }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ day }}, {{ time.substring(0, 5) }} {{ description }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-text>
        <v-row align="center">
          <v-col
              class="display-3"
              cols="6"
          >
            {{ +temp.toFixed() }}&deg;C
          </v-col>
          <v-col
              cols="3"
          >
            <v-img
                :src="imageSrc"
                max-width="200"
            ></v-img>
          </v-col>
        </v-row>
      </v-card-text>
      <div class="chart">
        <ul class="graph" v-if="hourlyTemp.length">
          <li v-for="(el, index) of hourlyTemp" :key="index">
            <img class="graph-icon" :src="`https://www.openweathermap.org/img/wn/${el.icon}@2x.png`" alt="iconWeather"/>
            <div class="temp" :style="`background-color: ${el.color}`">
              {{ el.temp }}
            </div>
            <div class="padding" :style="`padding-top: ${el.padding*5}px`"></div>
            <div class="time"><span :class="{today: el.day === 'today'}">{{ el.hours }}</span></div>
          </li>
        </ul>
      </div>
      <v-card-text>
        <p><b>Wind Speed:</b> {{ wind }} km/h</p>
        <p><b>Pressure:</b> {{ pressure }} hPa</p>
        <p><b>Humidity:</b> {{ humidity }} %</p>
      </v-card-text>
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
      name: '',
      description: '',
      day: '',
      time: '',
      icon: '',
      wind: '',
      pressure: 0,
      humidity: 0,
      lat: 0,
      lon: 0,
      hourlyTemp: []
    }
  },
  computed: {
    imageSrc() {
      if (this.icon) {
        return `https://www.openweathermap.org/img/wn/${this.icon}@2x.png`
      } else return ''
    },
    ...mapState(['arrCity'])
  },
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
          this.wind = city.wind.speed
          this.pressure = city.main.pressure
          this.humidity = city.main.humidity
          this.lat = city.coord.lat
          this.lon = city.coord.lon

          let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          this.day = new Date()
          this.day = days[this.day.getDay()]

          this.time = new Date().toLocaleTimeString()
          this.icon = city.weather[0].icon
          this.getHourlyTemp()
          break
        }
      }
    },
    async getHourlyTemp() {
      let data = []
      let hours = []
      let icons = []
      let date = []
      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&exclude=current,minutely,daily,alerts&units=metric&appid=fdc5c7b31d822cd909a6ffa9fab71737`)
          .then(res => res.json())
          .then(res => {
            console.log(res.hourly)
            for (let i = 0; i < 24; i += 3) {
              data.push(+res.hourly[i].temp.toFixed())
              icons.push(res.hourly[i].weather[0].icon)
              hours.push(`${new Date(res.hourly[i].dt * 1000).getHours()}:00`)
              date.push(new Date((res.hourly[i].dt) * 1000).toLocaleDateString().substring(0, 2))
            }
          }).catch(err => console.log(err))

      //padding for temperature difference
      let minTemp = Math.min(...data)
      let paddings = data.map(el => {
        if (el === minTemp) {
          return 0
        } else if (el > 0) {
          return (el - minTemp)
        } else {
          return (Math.abs(minTemp) - Math.abs(el))
        }
      })

      let today = new Date().toLocaleDateString().substring(0, 2)

      //hourly temp
      let hourlyData = []
      for (let i = 0; i < 8; i++) {
        hourlyData.push({
          temp: data[i],
          padding: paddings[i],
          hours: hours[i],
          icon: icons[i],
          color: data[i] > 0 ? '#e7a45c' : data[i] !== 0 ? ' #9dcddb' : '#cae2e8',
          day: date[i] === today ? 'today' : 'tomorrow'
        })
      }

      this.hourlyTemp = hourlyData
    }
  },
}
</script>

<style scoped lang="scss">
@import "../assets/colors";
#info {
  a {
    text-decoration: none;
  }

  .v-sheet {
    margin: 15px;
  }

  .chart {
    border: 1px solid $black;
    width: 100%;
    padding: 5px;
    background: $brown-coffee;
    overflow: auto;
    ul {
      display: flex;
      align-items: flex-end;

      li {
        margin: 0 1px;

        .graph-icon {
          width: 80%;
          align-self: center;
        }

        .temp {
          border-bottom: 1px solid $black;
          text-align: center;
        }

        .padding {
          margin-bottom: 10px;
        }

        .time {
          text-align: center;
          color: $white;

          span {
            background: $light-grey;
            padding: 3px 10px;
            border-radius: 10px;

            &.today {
              background: $brown-coffee;
              padding: 3px 10px;
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
