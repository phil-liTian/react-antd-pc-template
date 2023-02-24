import React from 'react'
import { connect } from 'react-redux'
import { Collapse, Button, Table } from 'antd'
import TypingCard from '@c/TypingCard'
const { Panel } = Collapse
const { Column } = Table

const Bug = props => {
  const { bugList } = props
  const bugContent = `此页面用于展示埋点收集到的异常信息。本系统将异常分成两大类: js异常和资源加载异常`
  return (
    <div className='app-container'>
      <TypingCard title='埋点bug收集' source={bugContent}></TypingCard>
      <Collapse defaultActiveKey={['1']}>
        <Panel header='报错' key='1'>
          <Button type='primary'>JsError</Button>
          <Button style={{ marginLeft: '20px' }} type='primary'>
            资源加载异常
          </Button>
        </Panel>
      </Collapse>
      <br />
      <Table dataSource={bugList} pagination={false}>
        <Column
          title='序号'
          dataIndex='id'
          key='id'
          render={(text, record, index) => {
            return index + 1
          }}
        ></Column>
        <Column
          title='监控指标'
          dataIndex='kind'
          key='kind'
          width={200}
        ></Column>
        <Column
          title='异常类型'
          ellipsis
          dataIndex='errorType'
          key='errorType'
        ></Column>
        <Column title='url' ellipsis dataIndex='url' key='url'></Column>
        <Column title='异常信息' ellipsis dataIndex='desc' key='desc'></Column>
        <Column
          title='异常堆栈'
          ellipsis
          dataIndex='stack'
          key='stack'
        ></Column>
        <Column title='操作元素' dataIndex='selector' key='selector'></Column>
        <Column
          title='userAgent'
          dataIndex='userAgent'
          key='userAgent'
        ></Column>
        <Column title='时间' dataIndex='timeStamp' key='timeStamp'></Column>
      </Table>
    </div>
  )
}

export default connect(state => state.minitor)(Bug)
