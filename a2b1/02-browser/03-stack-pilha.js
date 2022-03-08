// Stack ou Pilha (LIFO)
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0) return null;
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    print() {
        console.log(this.items);
    }
}

const historico = new Stack();

console.log('[03] - Stack');
historico.push('/');
historico.push('https://google.com');
historico.print();
console.log('[03] ==================');