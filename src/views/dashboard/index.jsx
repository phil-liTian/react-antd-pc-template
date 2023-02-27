import React, { useState } from 'react'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import { lineChartDefaultData } from './dataSource'

const DashBoard = () => {
  const [lineChartData, setLineChartData] = useState(
    lineChartDefaultData['New Visits']
  )
  return (
    <div>
      <PanelGroup />
      <LineChart
        style={{
          padding: 12,
          marginBottom: '25px'
        }}
        chartData={lineChartData}
      />
    </div>
  )
}

export default DashBoard
