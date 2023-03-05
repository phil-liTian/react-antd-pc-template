import React, { Component } from 'react'
import { Table, Collapse, Form, Button, Input, message, Select } from 'antd'
import { columns } from './dataSource'
import { getExcelList } from '@/service'
const { Panel } = Collapse
const { Option } = Select
class ExportExcel extends Component {
  fileTypeList = [
    { value: 'xlsx', label: 'xlsx' },
    { value: 'csv', label: 'csv' },
    { value: 'txt', label: 'txt' }
  ]

  state = {
    list: [],
    fileName: 'phil_excel',
    bookType: 'xlsx',
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
    const { list, fileName: filename, selectedRows, bookType } = this.state
    // if (bookType === 'xlsx') {
    //   import('@/lib/Export2Excel.js').then(excel => {
    //     excel.export_table_to_excel('my_table')
    //   })
    //   return
    // }
    // 导出已选择项
    if (type === 'selected' && !selectedRows?.length) {
      message.error('请先选择导出的内容')
      return
    }
    this.setState({ downloadLoading: true })
    import('@/lib/Export2Excel.js').then(excel => {
      const header = ['Id', '标题', 'Author', 'Readings', 'Date']
      const filterVal = ['id', 'title', 'author', 'readings', 'date']
      const _list = type === 'selected' ? selectedRows : list
      const data = this.formatJson(filterVal, _list)

      excel.export_json_to_excel({
        header,
        data,
        filename,
        bookType
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

  bookTypeChange = e => {
    this.setState({ bookType: e })
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
              <Form.Item label='文件类型'>
                <Select
                  defaultValue='xlsx'
                  style={{ width: '120px' }}
                  onChange={this.bookTypeChange}
                >
                  {this.fileTypeList.map(type => (
                    <Option key={type.value} value={type.value}>
                      {type.label}
                    </Option>
                  ))}
                </Select>
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
          id='my_table'
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

export default ExportExcel
