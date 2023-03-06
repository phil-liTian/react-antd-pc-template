//
const _getSelector = path => {
  return path
    .reverse()
    .filter(element => {
      return element !== document && element !== window
    })
    .map(ele => {
      let selector = ''
      if (ele.id) {
        return `${ele.nodeName.toLowerCase()}#${ele.id}`
      } else if (ele.className && typeof ele.className === 'string') {
        // 有类名
        return `${ele.nodeName.toLowerCase()}#${ele.className}`
      } else {
        selector = ele.nodeName.toLowerCase()
      }

      return selector
    })
    .join(' ')
}

const getSelector = pathOrTarget => {
  let path = []

  while (pathOrTarget) {
    path.push(pathOrTarget)
    pathOrTarget = pathOrTarget.parentNode
  }
  return _getSelector(path)
}

export default getSelector
