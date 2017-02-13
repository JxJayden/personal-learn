// 插入排序

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
var arr1 = [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];

var insertSort = function(arr) {
    let i = 1,
        len = arr.length,
        j, tmp;

    console.time('insertSort');

    for (i; i < len; i++) {
        tmp = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > tmp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = tmp;
    }
    console.timeEnd('insertSort');

    return arr;
}

console.log(insertSort(arr1));
