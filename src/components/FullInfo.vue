<template>
<div id="info">
  <router-link to="/">
    <v-btn
        color="accent"
        elevation="2"
        outlined
    >back</v-btn>
  </router-link>
  <v-card
      class="mx-auto brown lighten-4"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ day }}, {{ time }}, {{ description }}</v-list-item-subtitle>
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
        <v-col
          cols="3"
        >
          <v-img
              :src="imageSrc"
              max-width="200"
          >  </v-img>
        </v-col>
      </v-row>
    </v-card-text>
<!--    <VueApexCharts width="500" height="150" type="bar" :options="chartOptions" :series="series"></VueApexCharts>-->
    <VueApexCharts width="60%" type="line" :options="chartOptions" :series="series" class="chart"></VueApexCharts>
    <v-card-text>
      <p><b>Wind Speed:</b> {{ wind }} km/h</p>
      <p><b>Min/Max temperature:</b> {{ minTemp }}/{{ maxTemp }} &#8451;</p>
      <p><b>Pressure:</b> {{ pressure }} hPa</p>
      <p><b>Humidity:</b> {{ humidity }} %</p>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
import {mapState} from 'vuex'
import VueApexCharts from 'vue-apexcharts'

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
      minTemp: 0,
      maxTemp: 0,
      pressure: 0,
      humidity: 0,
      lat: 0,
      lon: 0,
      series: [
        {
          name: "High - 2013",
          data: []
        },
      ],
      chartOptions: {
        chart: {
          animations: {
            enabled: false
          },
          height: 350,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          },
          zoom: {
            enabled:false
          }
        },
        colors: ['transparent'],
        dataLabels: {
          enabled: true,
          style: {
            colors: ['blue']
          }
          ,
          background: {
            // foreColor: 'blue',
            padding: 10
          }
        },
tooltip: {
  enabled: false
},
        title: {
          text: 'Hourly Temperature',
          align: 'center'
        },
        markers: {
          size: 0
        },
        grid: {
          show: false
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        yaxis: {
          labels: {
            show: false
          },
          min: -50,
          max: 50
        },
        legend: {
          show: false
        }
      },
    }
  },
  components: {VueApexCharts},
  computed: {
    imageSrc() {
      if(this.icon) {
        return `http://www.openweathermap.org/img/wn/${this.icon}@2x.png`
      } else return ''
    },
    ...mapState(['arrCity'])},
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
          this.minTemp = city.main.temp_min
          this.maxTemp = city.main.temp_max
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
   async  getHourlyTemp () {
      let data = []
      let hours = []
      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&units=metric&appid=fdc5c7b31d822cd909a6ffa9fab71737`)
          .then(res=>res.json())
          .then(res=> {
            console.log(res)
            for (let i = 0; i < 27; i+=3) {
              data.push(res.hourly[i].temp)

              hours.push(new Date((res.hourly[i].dt)*1000).toLocaleTimeString().substring(0,5))
            }
            this.series = [
              {
                name: "High - 2013",
                data: data
              }
            ]
            this.chartOptions =  {
              chart: {
                animations: {
                  enabled: false
                },
                height: 150,
                type: 'line',
                dropShadow: {
                  enabled: true,
                  color: '#000',
                  top: 18,
                  left: 7,
                  blur: 10,
                  opacity: 0.2
                },
                toolbar: {
                  show: false
                },
                zoom: {
                  enabled:false
                }
              },
              colors: ['transparent'],
              dataLabels: {
                enabled: true,
                style: {
                  colors: ['blue']
                }
                ,
                background: {
                  // foreColor: 'blue',
                  padding: 5
                }
              },
              tooltip: {
                enabled: false
              },
              title: {
                text: 'Hourly Temperature',
                align: 'center'
              },
              markers: {
                size: 0
              },
              grid: {
                show: false
              },
              xaxis: {
                categories: hours},
              yaxis: {
                labels: {
                  show: false
                },
                min: -50,
                max: 50
              },
              legend: {
                show: false
              }
            }
            console.log(this.series[0].data)
          })
    }
  },
}
</script>

<style scoped lang="scss">
#info {
  a {
    text-decoration: none;
  }
  .v-sheet {
    margin: 15px;
  }
  .chart {
    display: flex;
    justify-content: center;
    div {
      overflow: visible;
      svg {
        &#SvgjsSvg1001{
          overflow: visible!important;
        }

      }
    }
  }
}
</style>
