class Stack {
    constructor() {
        this.stack = []
    }
    add(element) {
        this.stack.push(element)
    }
    remove() {
        this.stack.pop()
    }
}

const plates = new Stack();
plates.add('A');
console.log(plates.stack);
plates.add('B');
console.log(plates.stack);
plates.add('C');
console.log(plates.stack);
plates.add('D');
console.log(plates.stack);
plates.add('E');
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
