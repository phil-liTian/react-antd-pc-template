import React, { useState } from 'react'
import { Row, Col } from 'antd'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import { lineChartDefaultData } from './dataSource'
import './index.scss'

const DashBoard = () => {
  const [lineChartData, setLineChartData] = useState(
    lineChartDefaultData['New Visits']
  )

  const handleSetLineChartData = type => {
    // console.log('type', type)
    // TODO: 如何实现数据更新
    console.log('lineChartDefaultData[type]', lineChartDefaultData[type])
    setLineChartData(lineChartDefaultData[type])
  }
  return (
    <div className='app-container'>
      <PanelGroup handleSetLineChartData={handleSetLineChartData} />
      <LineChart
        style={{
          padding: 12,
          marginBottom: '25px'
        }}
        chartData={lineChartData}
      />
      <Row gutter={32}>
        <Col xs={24} sm={24} lg={8}>
          <div className='chat-wrapper'></div>
        </Col>
        <Col xs={24} sm={24} lg={8}>
          <div className='chat-wrapper'>
            {/* 饼图 */}
            <PieChart />
          </div>
        </Col>
        <Col xs={24} sm={24} lg={8}>
          <div className='chat-wrapper'></div>
        </Col>
      </Row>
    </div>
  )
}

export default DashBoard
