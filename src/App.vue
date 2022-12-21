<template>
  <div id="app">
      <BarChart />
  </div>
</template>

<script>
import BarChart from './components/Bar.vue'

export default {
  name: 'App',
  components: {
    BarChart
  },
created() {
    this.axios
      .get('data.json')
      .then(response => {
      console.log (response.data)
      })
  }
}
</script>

