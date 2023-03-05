import React, { Component } from 'react'
import { connect } from 'react-redux'
import echarts from '@/lib/echart'
import { debounce } from '@u/index'

class LineChart extends Component {
  state = {
    chart: null
  }

  initChart () {
    if (!this.el) return
    this.setState({ chart: echarts.init(this.el, 'macarons') }, () => {
      this.setOptions(this.props.chartData)
    })
  }

  setOptions ({ expectedData, actualData } = {}) {
    const { chart } = this.state
    chart.setOption({
      backgroundColor: '#fff',
      tooltip: {
        trigger: 'axis', // 坐标轴触发
        padding: [5, 10],
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        left: 10,
        right: 10,
        bottom: 10,
        top: 30,
        containLabel: true
      },
      legend: {
        data: ['expected', 'actual']
      },
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        boundaryGap: false,
        axisTick: {
          show: false // 是否显示坐标轴的刻度
        }
      },
      yAxis: {
        axisTick: {
          show: false
        }
      },
      series: [
        {
          name: 'expected',
          type: 'line',
          smooth: true,
          animationDuration: 2500, // 动画时长
          animationEasing: 'cubicInOut', // 动画缓动效果
          itemStyle: {
            color: '#FF005A',
            lineStyle: {
              width: 2,
              color: '#FF005A'
            }
          },
          data: expectedData
        },
        {
          name: 'actual',
          type: 'line',
          smooth: true,
          animationDuration: 2800, // 动画时长
          animationEasing: 'quadraticOut', // 动画缓动效果
          itemStyle: {
            color: '#3888fa',
            lineStyle: {
              width: 2,
              color: '#3888fa'
            }
          },
          areaStyle: {
            color: '#f3f8ff' // 分隔区域颜色
          },
          data: actualData
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

  // 移除chart 和resize事件
  dispose () {
    const { chart } = this.state
    if (!chart) return
    window.removeEventListener('resize', () => this.resize())
    this.setState({ chart: null })
  }

  componentDidMount () {
    debounce(this.initChart.bind(this), 300)()
    // windom尺寸发生改变时 chart尺寸同步发生改变
    window.addEventListener('resize', () => this.resize())
  }

  componentWillUnmount () {
    this.dispose()
  }

  componentDidUpdate () {
    console.log('props', this.props)
    // debounce(this.initChart.bind(this), 300)()
    // const { chart } = this.state
    // debounce(this.initChart.bind(this), 300)
  }

  render () {
    const { style } = this.props
    return (
      <div
        ref={el => (this.el = el)}
        style={{ ...style, height: '350px', width: '100%' }}
      ></div>
    )
  }
}

export default connect()(LineChart)
