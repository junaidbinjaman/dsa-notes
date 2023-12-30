class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}                        //


class LinkedList {
	constructor (value) {
	   const newNode = new Node(value);
	   this.head = newNode;
	   this.tail = newNode;
	   this.length = 1;
	}

    push(value) {
        const newNode = new Node(value);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }
    
}



let myLinkedList = new LinkedList(4);

myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();
console.log("\nLinked List:");
myLinkedList.printList();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/