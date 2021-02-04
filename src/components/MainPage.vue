<template>
<div id="main">
  <AddCity />
  <CardOfCity />
</div>
</template>

<script>
import AddCity from "@/components/AddCity";
import CardOfCity from "@/components/CardOfCity";
export default {
  name: "MainPage",
  components: {CardOfCity, AddCity}
}
</script>

<style scoped>

</style>
