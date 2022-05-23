// 快速排序
// 1.将数组根据中介值进行分区，小于于中介值的放中介值的左边，大于中介值的放在中介值右边；
// 2.返回分区后中介值的索引
var partition = function(arr, start, end){
    const len = arr.length
    let left = 0
    let right = len - 1
    while(1){
        while(left <= end && arr[left] <= arr[start]){ left += 1}
        while(right >= start + 1 && arr[right] >= arr[start]){ right -= 1}
        if(left >= right){
            break
        }
        [arr[left], arr[right]]  =[arr[right], arr[left]]
        left += 1
        right -= 1
    }
    [arr[right], arr[start]] = [arr[start], arr[right]]
    return right
}

var quickSort = function(arr, start, end){
    if(start === end){
        return
    }
    const index = partition(arr, start, end)
    if(index > start){
        quickSort(arr, start, index-1)
    }
    if(index <end){
        quickSort(arr, index+1, end)
    }
}

// let arr = [3,4,6,8,9]
// quickSort(arr, 0, 4)
// console.log(arr)


// 选择排序
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// 冒泡排序
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                var temp = arr[j+1];        // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// 插入排序
function insertionSort(arr) {
    const len = arr.length;
    let preIndex, current;
    for (let i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}

