// 希尔排序
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

function shellSort(arr) {
    var len = arr.length,
        gap = 1,
        tmp, i, j;

    while (gap < len / 3) gap = 3 * gap + 1;

    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (i = gap; i < len; i++) {
            tmp = arr[i];
            for (j = i - gap; j >= 0 && arr[j] > tmp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = tmp;
        }
    }

    return arr;
}

console.log(shellSort(arr));
