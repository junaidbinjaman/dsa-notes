class Node {
    constructor(value) {
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

    push (value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        
        let temp = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
             this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;   
        }

        this.length--;
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;
        const temp = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }

        this.length--;
        return temp;
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

    set(index, value) {
        let temp = this.get(index);

        if (temp) {
            temp.value = value;
            return true;
        }

        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length ) return undefined;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);

        const newNode = new Node(value);
        let before = this.get(index - 1);
        let after = before.next;

        

        before.next = newNode
        newNode.prev = before
        newNode.next = after;
        after.prev = newNode;

        this.length++;
        return this;
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return this.unshift();
        if (index === this.length) return this.pop();

        let temp = this.get(index);

        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.prev = null;
        temp.next = null;

        this.length--;
        return temp;
    }

    swapFirstLast() {
        if (this.length < 2) return;
        const temp = this.head.value;
        this.head.value = this.tail.value;
        this.tail.value = temp;
    }
}

const dll = new DoublyLinkedList(1);
dll.push(2);
dll.push(3);
// dll.push(4);
// dll.push(5);
// dll.push(6);
console.log(dll.get(0));
