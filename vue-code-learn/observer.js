/*
 * 百度前端技术学院课程之动态数据绑定（一）
 * http://ife.baidu.com/course/detail/id/15

 * 任务目的
 * 了解 getter 和 setter
 * 了解 new
 *
 * 任务描述
 * 这是 “动态数据绑定” 系列的第一题。
 *
 * 我之前经常使用 Vue，后来不满足于仅仅使用它，我想了解其内部实现原理，所以就尝试学习其源码，获益匪浅。所以，如果你跟我一样，希望挑战这高难度的事情，那就开启这一系列吧！
 *
 * 我们从最简单的开始。
 *
 * 其中，动态数据绑定就是 Vue 最为基础，最为有用的一个功能。这个系列将分成 5 部分，一步一步来理解和实现这一功能。
 *
 * 请实现这样的一个 Observer，要求如下：
 *
 * 1. 传入参数只考虑对象，不考虑数组。
 * 2. new Observer 返回一个对象，其 data 属性要能够访问到传递进去的对象。
 * 3. 通过 data 访问属性和设置属性的时候，均能打印出右侧对应的信息。
 */

function Observer(data) {
    this.data = data;
    this.walk(data);
}

let proto = Observer.prototype;

proto.walk = function(obj) {
    let value;

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            value = obj[key];

            typeof value === 'object' ?
                new Observer(value) :
                this.convert(key, value);
        }
    }
}

proto.convert = function(key, value) {
    Object.defineProperty(this.data, key, {
        get: function() {
            console.log(`你访问了 ${key}`)
            return value;
        },
        set: function(newValue) {
            console.log(`你设置了 ${key}，新的值为 ${newValue}`);

            if (newValue === value) return value;
            value = newValue;
            return value;
        }
    })
}

let app1 = new Observer({
    name: 'youngwind',
    age: 25
});

let app2 = new Observer({
    university: 'bupt',
    major: 'computer'
});

app1.data.name // 你访问了 name
app1.data.age = 100; // 你设置了 age，新的值为100
app2.data.university // 你访问了 university
app2.data.major = 'science' // 你设置了 major，新的值为 science
