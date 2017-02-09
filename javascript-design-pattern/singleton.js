// http://www.zcfy.cc/article/javascript-design-patterns-the-singleton-918.html

// es5

var singletonEs5 = (function () {
    var instance;

    function init() {
        return {
            publicMethod: function () {
                console.log('publicMethod');
            },
            publicProperty: 'publicProperty'
        }
    }

    return {
        getInstance: function () {
            return instance = instance ? instance : init();
        }
    }
})();

var singletonEs5A = singletonEs5.getInstance(),
    singletonEs5B = singletonEs5.getInstance();

console.log(singletonEs5A === singletonEs5B);

// singletonEs5 可以被重写

singletonEs5 = (function () {
    return {
        getInstance: function () {
            return 1;
        }
    }
})();

var singletonEs5C = singletonEs5.getInstance();

console.log(singletonEs5C);

// es6 normal

const singletonEs6Normal = {
    instance: null,
    init() {
        return {
            publicMethod() {
                console.log('publicMethod');
            },
            publicProperty: 'publicProperty'
        }
    },
    getInstance() {
        return this.instance = this.instance ? this.instance : this.init();
    }
};

Object.freeze(singletonEs6Normal);

const singletonEs6A = singletonEs6Normal.getInstance(),
    singletonEs6B = singletonEs6Normal.getInstance();

console.log(singletonEs6A);
console.log(singletonEs6B);
console.log(singletonEs6A === singletonEs6B);

// es6 class

class singletonEs6Class {
    constructor() {
        this.publicProperty = 'publicProperty';
    }

    publicMethod() {
        console.log('publicMethod');
    }
}


const singletonEs6ClassA = new singletonEs6Class(),
    singletonEs6ClassB = new singletonEs6Class();

Object.freeze(singletonEs6ClassA);
Object.freeze(singletonEs6ClassB);
console.log(singletonEs6ClassA === singletonEs6ClassB);

// es6 class final

class singletonEs6ClassFinal {
    constructor() {
        if (!singletonEs6ClassFinal.instance) {
            this.publicProperty = 'publicProperty';
            singletonEs6ClassFinal.instance = this;
        }

        return singletonEs6ClassFinal.instance;
    }

    publicMethod() {
        console.log('publicMethod');
    }
}


const singletonEs6ClassFinalA = new singletonEs6Class(),
    singletonEs6ClassFinalB = new singletonEs6Class();

Object.freeze(singletonEs6ClassFinalA);
Object.freeze(singletonEs6ClassFinalA);
console.log(singletonEs6ClassFinalA === singletonEs6ClassFinalA);
