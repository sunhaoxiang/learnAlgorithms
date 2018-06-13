function binarySearch (list, item) {
  // low和high用于跟踪要在其中查找的列表部分
  let low = 0
  let high = list.length - 1

  while (low <= high) { // 只要范围没有缩小到只包含一个元素
    let mid = Math.round((low + high) / 2) // 就检查中间的元素
    let guess = list[mid]

    if (guess === item) { // 找到了元素
      return mid
    }

    if (guess > item) { // 猜的数字大了
      high = mid - 1
    } else { // 猜的数字小了
      low = mid + 1
    }
  }

  return -1 // 没有指定的元素
}

let myList = [1, 3, 5, 7, 8, 9]

console.log(binarySearch(myList, 3)) // 1

console.log(binarySearch(myList, -1)) // -1
