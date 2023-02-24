import tracker from '../utils/tracker'

// 定义的错误类型码
const ERROR_RUNTIME = 1
const ERROR_SCRIPT = 2
const ERROR_STYLE = 3
const ERROR_IMAGE = 4
const ERROR_AUDIO = 5
const ERROR_VIDEO = 6
const ERROR_CONSOLE = 7
const ERROR_TRY_CATCH = 8

const JS_TRACKER_ERROR_DISPLAY_MAP = {
  1: 'JS_RUNTIME_ERROR',
  2: 'SCRIPT_LOAD_ERROR',
  3: 'CSS_LOAD_ERROR',
  4: 'IMAGE_LOAD_ERROR',
  5: 'AUDIO_LOAD_ERROR',
  6: 'VIDEO_LOAD_ERROR',
  7: 'CONSOLE_ERROR',
  8: 'TRY_CATCH_ERROR'
}

const injectJsError = () => {
  // 给window注册一个错误监听事件,监听全局未捕获的错误
  window.addEventListener('error', event => {
    console.log('event', event)
    const errorTarget = event.target
    console.log('errorTarget', errorTarget)

    if (errorTarget !== window) {
      console.log('window')
    } else {
      const { message, filename, lineno, colno, error } = event
      console.log(message, filename, lineno, colno, error)

      tracker.send({
        kind: 'stability', //监控指标的大类
        errorType: JS_TRACKER_ERROR_DISPLAY_MAP[ERROR_RUNTIME], // js执行错误
        desc: `${message} at ${filename}:${lineno}:${colno}`,
        stack: error?.stack ? error.stack : 'no stack'
      })
    }
  })
}

export default injectJsError
