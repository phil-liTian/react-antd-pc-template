// 将表格导出成zip压缩文件
/**
 * 当前方法导出10000条数据 1s以内就可以完成
 */

/* eslint-disable */
require('script-loader!file-saver')
import { saveAs } from 'file-saver'
import JSZip from 'jszip'
/**
 *
 * @param {*} th 表格标题
 * @param {*} jsonData 表格数据
 * @param {*} txtName 文件夹名称
 * @param {*} zipName 压缩包名称
 */

export function export_txt_to_zip({ th, jsonData, txtName, zipName }) {
  const zip = new JSZip()
  const data = jsonData
  const txt_name = txtName || 'file'
  const zip_name = zipName || 'file'
  let textData = `${th}\r\n`

  data.forEach(row => {
    let tempStr = row.toString()
    textData += `${tempStr}\r\n`
  })

  zip.file(`${txtName}.txt`, textData)

  zip
    .generateAsync({ type: 'blob' })
    .then(content => {
      saveAs(content, `${zipName}.zip`)
    })
    .catch(err => {
      console.log('导出失败')
    })
}
