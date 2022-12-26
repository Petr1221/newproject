<template> red
  <div id="app">
      <BarChart :dataset="dataset" v-if = "dataset.length>0"/>
      <DoughnutChart :dataset="dataset" v-if = "dataset.length>0"/>
  </div>
</template>

<script>
import BarChart from './components/Bar.vue'
import DoughnutChart from './components/Doughnut.vue'

export default {
  name: 'App',
  components: {
    BarChart, DoughnutChart
  },
  data (){
    return {
    dataset: []
    }
  },
created() {
    this.axios
      .get('data.json')
      .then(response => {
     this.dataset = response.data
      })
  }
}
</script>


