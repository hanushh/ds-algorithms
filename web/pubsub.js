

var pubsub = {

    subs: new Map(),

    subscribe(eventName, cb) {

        this.subs.set(eventName, cb);

    },

    publish(eventName, message) {
        if (this.subs.has(eventName)) {
            this.subs.get(eventName)(message);

        }
    },

    delete(eventName) {
        this.subs.delete(eventName);
    }

};


pubsub.subscribe('test', function (mess) {
    console.log('event1', mess);
});



pubsub.subscribe('test2', function (mess) {
    console.log('event2', mess);

});


pubsub.publish('test2', 'mss');


// pubsub.delete('test2');
pubsub.publish('test2', 'mss2');
