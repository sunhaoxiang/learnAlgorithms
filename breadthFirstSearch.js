function breadthFirstSearch(source, goal) {
  // 深拷贝原始数据
  let dataSource = JSON.parse(JSON.stringify(source))
  let res = []
  // 每一层的数据都 push 进 res
  res.push(...dataSource)
  // res 动态增加长度
  for (let i = 0; i < res.length; i++) {
    let curData = res[i]
    // 匹配成功
    if (curData.value === goal) {
      let result = []
      // 返回当前对象及其父节点所组成的结果
      return (function findParent(data) {
        result.unshift(data.key)
        if (data.parent) return findParent(data.parent)
        return result
      })(curData)
    }
    // 如果有 children 则 push 进 res 中待搜索
    if (curData.children) {
      res.push(...curData.children.map(d => {
        // 在每一个数据中增加 parent，为了记录路径使用
        d.parent = curData
        return d
      }))
    }
  }
  // 没有搜索到结果，默认返回空数组
  return []
}
