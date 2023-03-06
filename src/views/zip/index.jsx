import React, { Component } from 'react'
import { Table, Collapse, Form, Button, Input, message } from 'antd'
import { columns } from './dataSource'
import { getExcelList } from '@/service'
const { Panel } = Collapse
class Zip extends Component {
  state = {
    list: [],
    fileName: 'phil_zip',
    selectedRowKeys: [], // 选中行的key集合
    selectedRows: [], //选中的行
    downloadLoading: false // 下载中的状态
  }

  // 获取数据
  async getData () {
    const res = await getExcelList()
    if (res.code === 200) {
      this.setState({ list: res?.data?.list })
    }
  }

  handleExport (type) {
    const { list, fileName, selectedRows } = this.state
    // 导出已选择项
    if (type === 'selected' && !selectedRows?.length) {
      message.error('请先选择导出的内容')
      return
    }
    this.setState({ downloadLoading: true })
    import('@/lib/Export2Zip.js').then(zip => {
      const th = ['Id', 'Title', 'Author', 'Readings', 'Date']
      const filterVal = ['id', 'title', 'author', 'readings', 'date']
      const _list = type === 'selected' ? selectedRows : list
      const data = this.formatJson(filterVal, _list)

      zip.export_txt_to_zip({
        th,
        jsonData: data,
        txtName: fileName,
        zipName: fileName
      })

      this.setState({
        selectedRowKeys: [],
        downloadLoading: false
      })
    })
  }

  // 格式化表格数据
  formatJson (filterVal, jsonData) {
    return jsonData.map(v => filterVal.map(j => v[j]))
  }

  // 改变选中的内容
  onSelectChange = (selectedRowKeys, selectedRows) => {
    this.setState({ selectedRowKeys, selectedRows })
  }

  changeInputVal = e => {
    this.setState({ fileName: e.currentTarget.value })
  }

  componentDidMount () {
    this.getData()
  }

  render () {
    const { selectedRowKeys, downloadLoading } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    }
    return (
      <div className='app-container'>
        <Collapse defaultActiveKey={['1']}>
          <Panel header='导出选项' key={['1']}>
            <Form layout='inline'>
              <Form.Item label='文件名'>
                <Input
                  style={{ width: '250px' }}
                  placeholder='请输入文件名(默认phil_zip)'
                  onChange={this.changeInputVal.bind(this)}
                ></Input>
              </Form.Item>
              <Form.Item>
                <Button
                  type='primary'
                  onClick={this.handleExport.bind(this, 'all')}
                >
                  全部导出
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  type='primary'
                  onClick={this.handleExport.bind(this, 'selected')}
                >
                  导出已选择项
                </Button>
              </Form.Item>
            </Form>
          </Panel>
        </Collapse>
        <br />
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.list}
          rowKey='id'
          loading={downloadLoading}
        ></Table>
      </div>
    )
  }
}

export default Zip
