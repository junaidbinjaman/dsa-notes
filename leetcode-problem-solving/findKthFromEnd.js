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

    pop() {
        if (!this.head) return undefined;

        let temp = this.head;
        let pre = this.head;

        while(temp.next) {
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    shift() {
        if (!this.head) return undefined;

        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;

        let temp = this.head;

        for(let i = 0; i < 0; i++) {
            temp = temp.next;
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
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);
        if (index < 0 || index > this.length) return false;

        const newNode = new Node(value);
        const temp = this.get(index - 1);

        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();

        const before = this.get(index - 1);
        const temp = before.next;

        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = null, prev = null;

        while(temp !== null) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;
    }

    findKthFromEnd(k) {
        if (k === 1) return this.tail;

        let fast = this.head;
        let slow = this.head;
        let count = 0;
    
        // Move fast pointer k steps ahead
        while (fast !== null && count < k) {
            fast = fast.next;
            count++;
        }
    
        // If k is out of bounds, return null
        if (fast === null && count <= k) {
            if (count === k) {
                return this.head;
            }

            return null
        };
    
        // Move both fast and slow until fast reaches the end
        while (fast !== null) {
            fast = fast.next;
            slow = slow.next;
        }
    
        return slow ? slow : null;
    }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log(myLinkedList.findKthFromEnd(2));