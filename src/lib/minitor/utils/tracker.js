import store from '@s/index'
import { addBug } from '@s/actions'
import { tracker } from '@/service'
import userAgent from 'user-agent'

const userAgentName = userAgent.parse(navigator.userAgent)?.name

const getExtraData = () => {
  return {
    title: document.title,
    timeStamp: Date.now(),
    url: window.location.href,
    key: Date.now(),
    userAgent: userAgentName
  }
}

class SendTracker {
  // 发送一个错误日志
  send (data = {}) {
    const extraData = getExtraData()
    const logData = { ...extraData, ...data }
    // 将异常信息存储到store中
    store.dispatch(addBug(logData))
    // 此时我们也可以将异常信息发送到服务端
    tracker(logData)
    console.log('logData==>', logData)
  }
}

const myTracker = new SendTracker()

export default myTracker
