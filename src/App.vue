<template>
  <div id="app">
      <BarChart :dataset="dataset" v-if = "dataset.length>0"/>
  </div>
</template>

<script>
import BarChart from './components/Bar.vue'

export default {
  name: 'App',
  components: {
    BarChart
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

