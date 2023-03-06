import React, { Component } from 'react'
import {
  Table,
  Pagination,
  Button,
  Divider,
  Tag,
  Collapse,
  Form,
  Input,
  Select
} from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { getTableList } from '@/service'
import EditForm from './forms/editForm'
const { Column } = Table
const { Panel } = Collapse

class TableComponent extends Component {
  state = {
    // 列表中的数据
    dataList: [],
    // 总条数
    total: 0,
    // 加载状态
    loading: false,
    // 编辑框
    editFormVisible: false,
    queryData: {
      pageSize: 10,
      page: 1,
      status: '',
      title: '',
      star: ''
    }
  }

  handleEdit = row => {
    console.log('row', row)
    this.setState({
      editFormVisible: true
    })
  }

  handleCancel = () => {
    this.onCloseEdit()
  }

  // 关闭editForm的统一方法
  onCloseEdit = () => {
    this.setState({
      editFormVisible: false
    })
  }

  // 获取表格数据
  async fetchData () {
    const { queryData } = this.state
    this.setState({ loading: true })
    const res = await getTableList(queryData)
    const dataList = res.data?.list
    const total = res.data?.total
    this.setState({ dataList, total, loading: false })
  }

  componentDidMount () {
    this.fetchData()
  }

  render () {
    const { dataList, loading, editFormVisible, total } = this.state
    return (
      <div className='app-container'>
        <Collapse defaultActiveKey={['1']}>
          <Panel header='筛选' key='1'>
            <Form layout='inline'>
              <Form.Item label='标题'>
                <Input />
              </Form.Item>
              <Form.Item label='类型'>
                <Select style={{ width: '120px' }} />
              </Form.Item>
              <Form.Item label='推荐指数'>
                <Select style={{ width: '120px' }} />
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit'>
                  <SearchOutlined />
                  搜索
                </Button>
              </Form.Item>
            </Form>
          </Panel>
        </Collapse>

        <br />

        <Table
          bordered
          loading={loading}
          dataSource={dataList}
          pagination={false}
          rowKey={record => record.id}
        >
          <Column
            dataIndex='id'
            key='id'
            title='序号'
            width={200}
            sorter={(a, b) => a.id - b.id}
          ></Column>

          <Column
            dataIndex='title'
            width={200}
            key='title'
            title='标题'
          ></Column>

          <Column
            dataIndex='author'
            width={100}
            key='author'
            title='作者'
          ></Column>

          <Column
            dataIndex='readings'
            key='readings'
            title='阅读量'
            width={200}
          ></Column>

          <Column
            dataIndex='star'
            key='star'
            title='推荐指数'
            width={200}
          ></Column>

          <Column
            dataIndex='status'
            key='status'
            title='状态'
            width={200}
            render={status => {
              let color =
                {
                  published: 'green',
                  draft: 'red'
                }[status] || ''

              return <Tag color={color}>{status}</Tag>
            }}
          ></Column>

          <Column dataIndex='date' key='date' title='时间' width={200}></Column>

          <Column
            dataIndex='action'
            title='操作'
            width={200}
            render={(text, row) => (
              <span>
                <Button
                  onClick={this.handleEdit.bind(null, row)}
                  shape='circle'
                  icon={<EditOutlined />}
                  type='primary'
                ></Button>
                <Divider type='vertical' />
                <Button
                  shape='circle'
                  icon={<DeleteOutlined />}
                  type='primary'
                ></Button>
              </span>
            )}
          ></Column>
        </Table>

        <br />

        <Pagination
          total={total}
          pageSizeOptions={[10, 20, 40]}
          showTotal={total => `共${total}条数据`}
          showSizeChanger
          showQuickJumper
          hideOnSinglePage={true}
        />

        {/* 修改表格信息 */}
        <EditForm visible={editFormVisible} onCancel={this.handleCancel} />
      </div>
    )
  }
}

export default TableComponent
