// 快速排序

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left === 'number' ? left : 0,
        right = typeof right === 'number' ? right : len - 1;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    var piovt = left,
        index = left + 1;

    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[piovt]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, piovt, index - 1);
    return index - 1;
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

console.log(quickSort(arr));
