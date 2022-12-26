<template>
  <Doughnut
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Doughnut } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'DoughnutChart',
  components: {
    Doughnut
  },
  props: {
    dataset: {
    type: Array,
    default: () => []
    },
    chartId: {
      type: String,
      default: 'doughnut-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        labels: ['Математика', 'Чтение', 'Русский язык'],
        datasets: [
          {
            backgroundColor: ['#D86671', '#00D8FF', '#DD1B16'],
            data: [0, 0, 0]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  created () {
    var mathmax = 100
    var readmax = 100
    var writemax = 100
    this.dataset.forEach(item => {
        if (item["math score"] < mathmax) mathmax = item["math score"]
        if (item["reading score"] < readmax) readmax = item["reading score"]
        if (item["writing score"] < writemax) writemax = item["writing score"]
    })
    this.chartData.datasets[0].data[0] = mathmax
    this.chartData.datasets[0].data[1] = readmax
    this.chartData.datasets[0].data[2] = writemax
  }
}
</script>
