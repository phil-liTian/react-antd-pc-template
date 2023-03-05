import React, { Component } from 'react'
import { read, utils } from 'xlsx'
import { Upload, message } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
const { Dragger } = Upload

// 是否是excel文件
const isExcel = file => {
  return /\.(xls|xlsx|cvs)/.test(file.name)
}

// 获取表格的头部内容
const getHeaderRow = sheet => {
  let headers = []
  const range = utils.decode_range(sheet['!ref'])
  let R = range.s.r
  // 从excel的第一列到最后一列
  for (let C = range.s.c; C < range.e.c; C++) {
    // 获取第一行中每一列的数据
    const cell = sheet[utils.encode_cell({ c: C, r: R })]
    let hdr = `UNKNOWN${C}`
    if (cell?.t) hdr = utils.format_cell(cell)
    headers.push(hdr)
  }

  return headers
}

class UploadExcel extends Component {
  state = {
    excelData: {
      header: null,
      results: null
    }
  }
  dragProps = () => {
    let _this = this
    return {
      name: 'file',
      multiple: false,
      accept: '.xlsx, .xls',
      // 文件发生改变时的回调
      onChange (info) {
        console.log('status', info.file.status)
        const { status, name } = info.file
        if (status === 'done') {
          // 上传完成
          message.success(`${name}文件上传成功`)
        } else if (status === 'error') {
          // 上传失败
          message.error(`${name}文件上传失败`)
        }
      },
      // 上传文件之前的钩子，返回false则停止上传
      beforeUpload (file, fileList) {
        if (!isExcel(file)) {
          message.error('仅支持上传.xlsx,.xls,.cvs文件')
          return false
        }
      },
      // 自定义上传的行为
      customRequest (e) {
        _this.readerData(e.file).then(res => {
          e.onSuccess()
        })
      }
    }
  }

  readerData = rawFile => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = e => {
        const data = e.target.result
        const workbook = read(data, { type: 'array' })
        const firseSheetName = workbook.SheetNames[0] // sheet3
        const worksheet = workbook.Sheets[firseSheetName]
        // 获取到表格的标题内容
        const header = getHeaderRow(worksheet)
        // 将表格内容转化成js数组
        const results = utils.sheet_to_json(worksheet)
        this.generateData({ header, results })
        resolve()
      }
      reader.readAsArrayBuffer(rawFile)
    })
  }

  generateData = ({ header, results }) => {
    this.setState(
      { excelData: { header, results } },
      () =>
        this.props.uploadSuccess &&
        this.props.uploadSuccess(this.state.excelData)
    )
  }

  render () {
    return (
      <Dragger {...this.dragProps()}>
        <p className='ant-upload-drag-icon'>
          <InboxOutlined />
        </p>
        <p className='ant-upload-text'>
          Click or drag file to this area to upload
        </p>
      </Dragger>
    )
  }
}

export default UploadExcel
