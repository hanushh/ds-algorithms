function QElement(element, priority) {
    this.element = element;
    this.priority = priority;
}


PriorityQueue.prototype.items = [];

PriorityQueue.prototype.enqueue = function (item, priority) {
    var qElement = new QElement(item, priority);
    var contain = false;

    for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].priority > qElement.priority) {
            this.items.splice(i, 0, qElement);
            contain = true;
            break;
        }
    }

    if (!contain) {
        this.items.push(qElement);
    }
}

PriorityQueue.prototype.dequeue = function (item) {

    if (this.isEmpty()) {
        throw Error("Underflow");
    }
    return this.items.shift();

}


PriorityQueue.prototype.isEmpty = function () {
    return (this.element.length === 0);
}


PriorityQueue.prototype.printQueue = function () {

    console.log(this.items.map(item => item.element));
}


function PriorityQueue() { }

module.exports = { PriorityQueue };

// const priorityQueue = new PriorityQueue();

// priorityQueue.enqueue('A', 1);

// priorityQueue.enqueue('D', 4);

// priorityQueue.enqueue('C', 3);

// priorityQueue.enqueue('E', 5);

// priorityQueue.enqueue('B', 2);

// priorityQueue.printQueue();