class Event {
    constructor() {
        this.subscribers = new Map([
            ['default', []]
        ]);
    }

    emit(type, ...args) {
        if (!this.subscribers.has(type)) {
            console.log(`${type} is not exist`);
        } else {
            for (let fn of this.subscribers.get(type)) {
                fn.apply(null, args);
            }
        }
    }

    addEventListener(type = 'default', fn) {
        console.log(type);
        console.log(fn);
        let sub = this.subscribers;

        if (!sub) {
            sub = new Map();
        }

        if (!sub.has(type)) {
            sub.set(type, [fn]);
        } else {
            sub.get(type).push(fn);
        }
    }

    removeEventListener(type) {
        let sub = this.subscribers;

        if (!sub.has(type)) {
            console.log(`${type} is not exist`);
        } else {
            sub.delete(type);
            console.log('delete success');
        }
    }

    remove(type) {
        this.removeEventListener(type);
    }

    on(type, fn) {
        this.addEventListener(type, fn);
    }
}

const newEvent = new Event();

newEvent.addEventListener('test', (...args) => { console.log(args) });
newEvent.on('test', (...args) => { console.log(args) });
newEvent.emit('test', 'test1', 'test2');
newEvent.remove('test');
