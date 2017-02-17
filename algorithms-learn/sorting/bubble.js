function bubbleSort(arr) {
    var len = arr.length,
        i, tmp;
    while (len > 1) {
        for (i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
        }
        len--;
    }

    return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(bubbleSort(arr));
