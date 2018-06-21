<script>
  import { Line } from 'vue-chartjs'

  export default {
    name: 'line-chart',
    extends: Line,
    props: ['data', 'options'],
    data() {
      return {
        gradient: null,
        gradient2: null
      }
    },
    methods: {
    },
    mounted() {
      this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
      this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
      this.renderChart(this.data, this.options)
      setInterval(() => {
        this._data._chart.update()
      }, 150)
    }
  }
</script>
