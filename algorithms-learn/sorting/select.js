// 选择排序

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
var arr1 = [ 2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50 ];
var selectSort = function(arr) {
    let i = 0,
        len = arr.length,
        j, tmp, index;

    console.time('selectSort');

    for (i; i < len; i++) {
        index = i;
        for (j = i + 1; j < len; j++) {
            if (arr[j] < arr[index]) index = j;
        }
        tmp = arr[i];
        arr[i] = arr[index];
        arr[index] = tmp;
    }

    console.timeEnd('selectSort');
    return arr;
}

console.log(selectSort(arr1));
