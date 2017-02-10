// 函数柯里化
// add(2)(3)(4)

// function add(a) {
//     let tmp = 0;
//     tmp += a;
//     return function add2(b) {
//         if (arguments.length === 0) {
//             return tmp;
//         } else {
//             tmp += b;
//             return add2;
//         }
//     }
// }

// console.log(add(2)(3)(4)());

function curry(fn, ...value) {
    if (typeof fn !== 'function') {
        throw new TypeError('the first argument must be curry!');
    } else {
        return (...b) => {
            return fn.apply(null, value.concat(b));
        }
    }

}

function add(a, b) {
    return a + b;
}

var curryAdd1 = curry(add, 1);

console.log(curryAdd1(3));
console.log(curryAdd1(5));
console.log(curryAdd1(6));

var errorCurry = curry(1, 1);
