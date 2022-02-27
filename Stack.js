class Stack {
    constructor() {
        this.stack = []
    }
    add(element) {
        this.stack.push(element)
    }
}

const plates = new Stack();
plates.add('A');
plates.add('B');
plates.add('C');
plates.add('D');
plates.add('E');

console.log(plates.stack);