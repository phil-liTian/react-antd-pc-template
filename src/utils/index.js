// 根据某个属性从menuList里面获取对应的menuItem
export const getMenuItemFromMenuListByProperty = (menuList, key, value) => {
  let stack = [].concat(menuList)
  let res
  while (stack.length) {
    let cur = stack.shift()

    if (cur.children?.length) {
      stack = [...stack, ...cur.children]
    }

    if (value === cur[key]) {
      res = cur
      break
    }
  }

  return res
}

// 防抖
export function debounce (func, wait, immediate) {
  let result, context, timeStamp, timeout, args

  function later () {
    // 距上一次出发时间间隔
    const last = +new Date() - timeStamp
    if (last > 0 && last < wait) {
      // 重新计时
      timeout = setTimeout(later, wait - last)
    } else {
      // 时间到了 应该出发func函数
      timeout = null
      if (!immediate) {
        // 不是立即执行函数
        result = func.apply(context, args)
      }
    }
  }

  return function (...args) {
    context = this
    timeStamp = +new Date()

    const callNow = immediate && !timeout
    if (!timeout) timeout = setTimeout(later, wait)
    // 立即执行函数
    if (callNow) {
      result = func.apply(context, args)
    }

    return result
  }
}
