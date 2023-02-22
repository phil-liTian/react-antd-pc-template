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
