function quickSort(arr) {
  if (arr.length < 2) { // 基线条件，为空或只包含一个元素的数组是有序的
    return arr
  }

  let pivot = arr[0] // 基准值
  let less = [] // 小于等于基准值的放入此数组
  let greater = [] // 大于基准值的放入此数组

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) { // 小于等于基准值
      less.push(arr[i])
    } else { // 大于基准值
      greater.push(arr[i])
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)]
}

let myArr = [10, 5, 2, 3]

console.log(quickSort(myArr))
