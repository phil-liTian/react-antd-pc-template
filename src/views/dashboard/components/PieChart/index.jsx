import React, { Component } from 'react'
import echarts from '@/lib/echart'
import { debounce } from '@u'

class PieChart extends Component {
  // 默认的props属性
  static defaultProps = {
    width: '100%',
    height: '300px'
  }

  state = {
    chart: null
  }

  initChart () {
    if (!this.el) return
    this.setState({ chart: echarts.init(this.el, 'macarons') }, () => {
      this.setOptions()
    })
  }

  setOptions () {
    this.state.chart.setOption({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        left: 'center',
        bottom: '10',
        data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
      },
      calculable: true,
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: [10, 95],
          center: ['50%', '38%'],
          data: [
            { value: 320, name: 'Industries' },
            { value: 240, name: 'Technology' },
            { value: 149, name: 'Forex' },
            { value: 100, name: 'Gold' },
            { value: 59, name: 'Forecasts' }
          ],
          roseType: 'radius',
          animationEasing: 'elasticOut',
          animationDelay: 300
        }
      ]
    })
  }

  resize () {
    const { chart } = this.state
    if (chart) {
      debounce(chart.resize.bind(this), 300)()
    }
  }

  dispose () {
    const { chart } = this.state
    if (!chart) return
    window.removeEventListener('resize', () => this.resize())
    this.setState({ chart: null })
  }

  componentDidMount () {
    debounce(this.initChart.bind(this), 300)()
    window.addEventListener('resize', () => this.resize())
  }

  componentWillUnmount () {
    this.dispose()
  }

  render () {
    const { width, height, styles } = this.props
    return (
      <div
        ref={el => (this.el = el)}
        style={{ ...styles, width, height }}
      ></div>
    )
  }
}

export default PieChart
