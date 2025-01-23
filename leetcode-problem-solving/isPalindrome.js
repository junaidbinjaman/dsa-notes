class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
 
class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value){
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(!this.head) return undefined;
        if (index < 0 || index > this.length) return undefined;
        let temp = this.head;

         if (index < this.length/2) {
            for(let i = 0; i < index; i++) {
                temp = temp.next;
            }
         } else {
            temp = this.tail;
            for (let i = this.length - 1; i >= index ; i--) {
                temp = temp.prev;
            }
         }
         return temp;
    }

    isPalindrome() {
        if (!this.head) return true; // 📋 Return true if the list is empty.

        let left = 0, right = this.length // 📋 Define pointers.

        while (left < right) { // 📋 apply two pointer technique. One pointer from the left and one pointer from the right.
            if (this.get(left).value !== this.get(right).value) {
                return false; // 📋 If left and right doesn't match return false.
            }
            left++;
            right--;
        }

        return true; // 📋 If the iteration completes without, return true.
    }

}



let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(1);

console.log("List 1:");
myDoublyLinkedList.printList();
console.log("Is List 1 a palindrome? " + myDoublyLinkedList.isPalindrome());

let myDoublyLinkedList2 = new DoublyLinkedList(1);
myDoublyLinkedList2.push(2);
myDoublyLinkedList2.push(3);
myDoublyLinkedList2.push(4);
myDoublyLinkedList2.push(5);

console.log("\nList 2:");
myDoublyLinkedList2.printList();
console.log("Is List 2 a palindrome? " + myDoublyLinkedList2.isPalindrome());

/*
    EXPECTED OUTPUT:
    ----------------
    List 1:
    1
    2
    3
    2
    1
    Is List 1 a palindrome? true

    List 2:
    1
    2
    3
    4
    5
    Is List 2 a palindrome? false
*/
