<template>
  <Bar
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
import { Bar } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: {
    Bar
  },
  props: {
    dataset: {
      type: Array,
      default: () => []
    },
    chartId: {
      type: String,
      default: 'bar-chart'
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
        labels: [
          'Математика',
          'Чтение',
          'Русский язык'
        ],
        datasets: [
          {
            label: 'Средний балл',
            backgroundColor: '#f87979',
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
    var mathsum = 0
    var readsum = 0
    var writesum = 0
    this.dataset.forEach(item => {
        mathsum = mathsum + item["math score"]
         readsum = readsum + item["reading score"]
          writesum = writesum + item["writing score"]
    })
    this.chartData.datasets[0].data[0] = mathsum/1000
    this.chartData.datasets[0].data[1] = readsum/1000
    this.chartData.datasets[0].data[2] = writesum/1000
  }
}
</script>