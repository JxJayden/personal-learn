/*
 * 百度前端技术学院课程之动态数据绑定（二）
 * http://ife.baidu.com/course/detail/id/20?t=1488271519666#learn

 * 任务目的
 * 在实践中使用递归思想
 * 了解设计模式中的 “发布 - 订阅模式”
 * 任务描述
 * 这是 “动态数据绑定” 系列的第二题。在第一题的基础上，我们继续考虑以下难点：
 *
 * 如果传入参数对象是一个 “比较深” 的对象（也就是其属性值也可能是对象），那该怎么办呢？举个例子。
 * // 一个“比较深”的对象：某些属性的值也是一个对象
 * let obj = {
 *  a: 1,
 *  b: 2,
 *  c: {
 *      d: 3,
 *      e: 4
 *  }
 * }
 * 如果设置新的值是一个对象的话，新设置的对象的属性是否能能继续响应 getter 和 setter。举个例子。
 *
 *  let app1 = new Observer({
 *          name: 'youngwind',
 *          age: 25
 *  });
 *
 *  app1.data.name = {
 *          lastName: 'liang',
 *          firstName: 'shaofeng'
 *  };
 *
 *  app1.data.name.lastName;
 *  // 这里还需要输出 '你访问了 lastName '
 *  app1.data.name.firstName = 'lalala';
 *  // 这里还需要输出 '你设置了firstName, 新的值为 lalala'
 * 考虑传递回调函数。在实际应用中，当特定数据发生改变的时候，我们是希望做一些特定的事情的，而不是每一次都只能打印出一些信息。所以，我们需要支持传入回调函数的功能。举个例子。
 *
 *  let app1 = new Observer({
 *          name: 'youngwind',
 *          age: 25
 *  });
 *
 *  // 你需要实现 $watch 这个 API
 *  app1.$watch('age', function(age) {
 *          console.log(`我的年纪变了，现在已经是：${age}岁了`)
 *  });
 *
 *  app1.data.age = 100; // 输出：'我的年纪变了，现在已经是100岁了'
 * 任务注意事项
 * 不能使用任何第三方的库
 * 程序执行环境为浏览器
 */

function Observer(data) {
    this.data = data;
    this._subscribers = {};
    this.walk(data);
}

proto = Observer.prototype;
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
    var that = this;
    Object.defineProperty(this.data, key, {
        get: function() {
            console.log(`你访问了 ${key}`)
            return value;
        },
        set: function(newValue) {
            console.log(`你设置了 ${key}，新的值为 ${newValue}`);

            if (newValue === value) return value;

            if (typeof newValue === 'object') {
                newValue = (new Observer(newValue)).data;
            }

            value = newValue;

            that._emit(key, value);
            return value;
        }
    })
}

proto._emit = function(key, ...args) {
    let arr = this._subscribers[key];
    if (arr && arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            typeof arr[i] === 'function' && arr[i].apply(null, args);
        }
    }
}

proto.$watch = function(key, cb) {
    if (!this.data[key]) {
        throw err;
    } else {
        if (this._subscribers[key]) {
            if (Object.prototype.toString.call(this._subscribers[key]) === '[object Array]') {
                this._subscribers[key].push(cb);
            } else {
                this._subscribers[key] = [].concat(cb);
            }
        } else {
            this._subscribers[key] = [].concat(cb);
        }

    }
}

app1 = new Observer({
    name: 'youngwind',
    age: 25
});

app1.$watch('age', function(age) {
    console.log(`我的年纪变了，现在已经是：${age}岁了`)
});

app1.data.age = 100;
