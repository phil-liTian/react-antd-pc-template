/**
 * 实现打印功能: 当前打印功能可实现纯文本以及含html标签的文本内容的逐字打印
 * 思路：source为绑定数据源的dom结构，output为展示给客户的dom结构，将数据绑定到source的dom结构上,结束的时候向
 * 外暴露一个done方法
 *
 * 有三种情况待处理
 * 1. 纯文本节点: nodeType: 3, 将字符串拆分成数组, 遍历val，将val逐个追加到dom结构中
 * 2. 开始就是html标签的内容: nodeType: 1，忘val数组中push dom结构及val数组, 遍历的时候先使用cloneNode处理
 * 节点，然后再将节点中的内容追加到标签内
 * 3. 字符串中内含html标签的内容: 边缘case，当val中无值时，可能是遍历到了dom元素节点，这是再遍历其parent
 */

class Typing {
  constructor (opts = {}) {
    this.opts = opts || {}
    // 数据源的dom
    this.source = opts.source?.current
    // 展示给客户的dom结构
    this.output = opts.output?.current
    // 延时
    this.delay = opts.delay || 120

    this.chain = {
      parent: null,
      dom: this.output,
      val: []
    }

    if (!(typeof this.opts.done === 'function')) {
      this.opts.done = function () {}
    }
  }

  init () {
    this.chain.val = this.convert(this.source, this.chain.val)
  }

  convert (dom, arr) {
    // 将对应的dom结构转化成数组
    const children = Array.from(dom.childNodes)
    for (let i = 0; i < children.length; i++) {
      const node = children[i]
      if (node.nodeType === 3) {
        // 是一个文本节点的话，需要将其转换成数组
        arr = arr.concat(node.nodeValue.split(''))
      } else if (node.nodeType === 1) {
        // 处理元素节点，例如内部有div或者span标签
        let val = []
        val = this.convert(node, val)
        arr.push({
          dom: node,
          val
        })
      }
    }
    return arr
  }
  // 打印文字内容
  print (dom, val, cb) {
    setTimeout(() => {
      dom.appendChild(document.createTextNode(val))
      cb()
    }, this.delay)
  }

  play (ele) {
    const { val, dom, parent } = ele
    if (!val.length) {
      // nice: 处理当前dom结构存在嵌套的情况
      if (parent) {
        this.play(parent)
      } else {
        this.opts.done()
      }
      return
    }
    const current = val.shift()
    if (typeof current === 'string') {
      // 源dom结构内的内容是纯文本
      this.print(dom, current, () => {
        // 继续打印下一个字符
        this.play(ele)
      })
    } else {
      // 源dom结构内还包含html标签, 克隆节点，但是不克隆子节点，所以这里不需要加参数true
      let dom = current.dom.cloneNode()
      ele.dom.appendChild(dom)
      this.play({
        dom,
        val: current.val,
        parent: ele
      })
    }
  }

  start () {
    this.init()
    this.play(this.chain)
  }
}

export default Typing
