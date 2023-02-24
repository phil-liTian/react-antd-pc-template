import React from 'react'
import { connect } from 'react-redux'
import echarts from '@/lib/echart'

let defaultProps = {}

const LineChart = props => {
  return <div style={{ height: '350px', width: '100%' }}></div>
}

export default connect()(LineChart)
