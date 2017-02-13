// 归并排序 采用自上而下的递归方法
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

function mergeSort(arr) {
    var len = arr.length;

    if (len < 2) {
        return arr;
    }
    var middleIndex = Math.floor(len / 2),
        leftArr = arr.slice(0, middleIndex),
        rightArr = arr.slice(middleIndex);
    return merge(mergeSort(leftArr), mergeSort(rightArr));

}

function merge(leftArr, rightArr) {
    var result = [];

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            result.push(leftArr.shift());
        } else {
            result.push(rightArr.shift());
        }
    }

    while (leftArr.length) {
        result.push(leftArr.shift());
    }

    while (rightArr.length) {
        result.push(rightArr.shift());
    }
    return result;
}

console.log(mergeSort(arr));
