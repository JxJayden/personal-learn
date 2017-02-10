// es5 normal

function CarMaker() {};

CarMaker.prototype.drive = function() {
    console.log('ye, i have ' + this.doors + ' doors');
}

CarMaker.compact = function() {
    this.doors = 4;
}

CarMaker.suv = function() {
    this.doors = 6;
}

CarMaker.factory = function(type) {
    if (typeof CarMaker[type] !== 'function') {
        throw new TypeError('the factory don\'t have ' + type + ' car');
    }

    if (typeof CarMaker[type].prototype.drive !== 'function') {
        CarMaker[type].prototype = new CarMaker();
    }
    var newCar = new CarMaker[type]();
    return newCar;
}

CarMaker.factory('suv').drive();

// es6
class CarMakerEs6 {
    constructor() {
        this.doors = 0;
    }

    drive() {
        console.log(`it is ES6! ye, i have ${this.doors} doors`);
    }

    static factory(type) {
        return new CarMakerEs6[type]();
    }
}

CarMaker.suv = class suv extends CarMakerEs6 {
    constructor() {
        super();
        this.doors = 6;
    }
}

CarMaker.factory('suv').drive();
