var eventEmitter = {
    arr: {},
    onceArr: {},
    on(msg, cb) {

        if (!this.arr[msg]) {
            this.arr[msg] = [];
        }

        this.arr[msg].push(cb);

    },
    once(msg, cb) {
        if (!this.onceArr[msg]) {
            this.onceArr[msg] = [];
        }

        this.onceArr[msg].push(cb);
    },
    emit(msg, ...ar) {
        if (this.arr[msg]) {
            this.arr[msg].forEach(cur => cur.apply(cur, ar));
        }

        if (this.onceArr[msg]) {
            let cur;
            while (cur = this.onceArr[msg].pop()) {
                cur.apply(cur, ar);
            }
        }
    },
    off(msg, cb) {

        
    }


};

function responseToEvent(msg) {
    console.log(msg);
}

eventEmitter.on('pramp', responseToEvent);
eventEmitter.once('pramp', function (msg) { console.log(msg + ' just once!'); });
eventEmitter.emit('pramp', '1st');
eventEmitter.emit('pramp', '2nd');
eventEmitter.off('pramp', responseToEvent);
eventEmitter.emit('pramp', '3rd');
eventEmitter.emit('pramp', '1st');
