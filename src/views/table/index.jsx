import React, { Component } from "react";
import { Table, Pagintion } from 'antd'
import { getTableList } from '@/service'
import EditForm from './forms/editForm'

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
  // 获取表格数据
  async fetchData () {
    const { queryData } = this.state
    this.setState({ loading: true })
    const res = await getTableList(queryData)
    const dataList = res.data?.list
    const total = res.data?.total
    this.setState({ dataList, total, loading: false })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { dataList, loading, editFormVisible } = this.state
    return <div className="app-container">
      <Table loading={loading} dataSource={dataList} ></Table>

      {/* 修改表格信息 */}
      <EditForm visible={editFormVisible}/>
    </div>
  }
}

export default TableComponent