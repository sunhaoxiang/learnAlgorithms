// 找出最小的元素
function findSmallest(arr) {
  let smallest = arr[0] // 储存最小的值
  let smallestIndex = 0 // 储存最小的元素

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
      smallestIndex = i
    }
  }

  return smallestIndex
}

// 对数组进行排序
function selectionSort(arr) {
  let newArr = []
  let len = arr.length

  for (let i = 0; i < len; i++) {
    let smallest = findSmallest(arr) // 最小的元素
    newArr.push(...arr.splice(smallest, 1)) // 将最小的元素从原数组剔除，并加入到新数组
  }

  return newArr
}

let myArr = [5, 3, 6, 2, 10]

console.log(selectionSort(myArr)) // [ 2, 3, 5, 6, 10 ]
