// First in first out (FIFO)
class Queue{
    constructor() {
        this.queue = [];
    }
    enqueue(element) {
        this.queue.push(element);
    }
    dequeue() {
        this.queue.shift();
    }
}

const students = new Queue();
students.enqueue('A');
console.log(students.queue);
students.enqueue('B');
console.log(students.queue);
students.enqueue('C');
console.log(students.queue);
students.enqueue('D');
console.log(students.queue);
students.enqueue('E');
console.log(students.queue);
students.dequeue();
console.log(students.queue);
students.dequeue();
console.log(students.queue);
students.dequeue();
console.log(students.queue);
students.dequeue();
console.log(students.queue);