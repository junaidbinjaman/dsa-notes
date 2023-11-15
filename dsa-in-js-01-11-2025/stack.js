class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
   constructor(value) {
       const newNode = new Node(value);
       this.top = newNode;
       this.length = 1
   }

   // The stack push method.
   push(value) {
       const newNode = new Node(value);

       if (this.length === 0) {
           this.top = newNode;
       } else {
           newNode.next = this.top;
           this.top = newNode;
       }

       
       this.length++;
       return this;
   }
}

const myStack = new Stack(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);
myStack.push(50);
