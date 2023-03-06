import React, { Component } from 'react'
import { Table } from 'antd'
import UploadExcelComponent from '@c/UploadExcel'

class UploadExcel extends Component {
  state = {
    tableHeader: [],
    tableData: []
  }

  handleUploadSuccess = ({ results, header }) => {
    this.setState({
      tableData: results,
      tableHeader: header
    })
  }

  render () {
    const { tableHeader, tableData } = this.state
    return (
      <div className='app-container'>
        <UploadExcelComponent uploadSuccess={this.handleUploadSuccess} />
        <br />
        <Table
          columns={tableHeader.map(item => ({
            title: item,
            dataIndex: item,
            key: item,
            width: 195,
            align: 'center'
          }))}
          dataSource={tableData}
        ></Table>
      </div>
    )
  }
}

export default UploadExcel
