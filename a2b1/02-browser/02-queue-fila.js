// Queue ou Fila (FIFO)
class Queue {
    constructor() {
        this.data = [];
    }
    
    enqueue(record) {
        this.data.push(record);
    }
    
    dequeue() {
        return this.data.shift();
    }
    
    print() {
        console.log(this.data);
    }
}