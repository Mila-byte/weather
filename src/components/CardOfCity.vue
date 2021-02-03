<template>
<div id="card">
<div v-for="(city, index) of getDataOfCity" :key="city.id">
  <div class="shortInfo" >
    <p>id: {{ city.id }}</p>
    <p>Temp: {{ +city.main.temp.toFixed() }} &#8451;</p>
    <p>Name: {{ city.name }}</p>
    <input type="button" value=" " @click="showMoreInfo(city.id)">
  </div>
  <div class="moreInfo" v-if="idActiveBlock === city.id">
    <p>Temp: {{ +city.main.temp.toFixed() }} &#8451;</p>
    <p>Name: {{ city.name }}</p>
  </div>

  <input type="button" value="X" @click="deleteCity(index)">
</div>
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
    }
  }
}
</script>

<style scoped lang="scss">
</style>
