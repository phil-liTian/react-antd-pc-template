import React from 'react'
import { Row, Col } from 'antd'
import CountUp from 'react-countup'
import {
  TeamOutlined,
  MessageOutlined,
  PayCircleOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons'
import './index.scss'

const chartList = [
  {
    type: 'New Visits',
    icon: <TeamOutlined style={{ fontSize: '48px', color: '#40c9c6' }} />,
    num: 102400
  },
  {
    type: 'Messages',
    icon: <MessageOutlined style={{ fontSize: '48px', color: '#36a3f7' }} />,
    num: 81212
  },
  {
    type: 'Purchases',
    icon: <PayCircleOutlined style={{ fontSize: '48px', color: '#f4516c' }} />,
    num: 9280
  },
  {
    type: 'Shoppings',
    icon: (
      <ShoppingCartOutlined style={{ fontSize: '48px', color: '#f6ab40' }} />
    ),
    num: 13600
  }
]

const PanelGroup = () => {
  return (
    <div className='panel-group-container'>
      <Row className='panel-group' gutter={30}>
        {chartList.map((chart, i) => (
          <Col key={i} className='card-panel-col' lg={6} sm={12} xs={12}>
            <div className='card-panel'>
              <div className='card-panel-icon-wrapper'>{chart.icon}</div>
              <div className='card-panel-description'>
                <p className='card-panel-text'>{chart.type}</p>
                <CountUp end={chart.num} start={0} className='card-panel-num' />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default PanelGroup
