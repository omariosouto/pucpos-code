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

console.log('[02] - Queue');
const requestsDeUmaPagina = new Queue();
requestsDeUmaPagina.enqueue('https://google.com');
requestsDeUmaPagina.enqueue('https://twitter.com');
requestsDeUmaPagina.dequeue('https://twitter.com/omariosouto');
requestsDeUmaPagina.print();
console.log('[02] ==================');