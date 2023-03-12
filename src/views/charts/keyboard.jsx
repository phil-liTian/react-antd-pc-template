import React, { Component } from 'react'
import echarts from '@/lib/echart'

class Keyboard extends Component {
  state = {
    chart: null
  }

  setOptions () {
    console.log('this.el')
    const xAxisData = []
    const data2 = []
    for (let i = 0; i < 50; i++) {
      xAxisData.push(i)
      data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3)
    }

    this.state.chart.setOption({
      backgroundColor: '#08263a',
      grid: {
        left: '5%',
        right: '5%'
      },
      xAxis: [
        {
          show: false,
          data: xAxisData
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'black',
          type: 'bar',
          data: data2,
          z: 1,
          itemStyle: {
            normal: {
              opacity: 0.4,
              shadowColor: '#111'
            }
          }
        }
      ]
    })
  }

  initChart () {
    if (!this.el) return
    this.setState({ chart: echarts.init(this.el, 'macarons') }, () => {
      this.setOptions()
    })
  }

  componentDidMount () {
    this.initChart()
  }
  render () {
    return (
      <div
        style={{ width: '100%', height: 'calc(100vh - 100px)' }}
        className='app-container'
      >
        <div
          ref={(el) => (this.el = el)}
          style={{ width: '100%', height: '100%' }}
        ></div>
      </div>
    )
  }
}

export default Keyboard
