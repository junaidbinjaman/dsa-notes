class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        
        let temp = this.root;

        while(true) {
            if (newNode.value === temp.value) return undefined;

            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    contains(value) {
        if (this.root === null) return false;
        let temp = this.root;
        while(temp) {
            if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right;
            } else {
                return true;
            }
        }

        return false;
    }

    rContains(value, currentNode = this.root) {
        if (currentNode === null) return false;

        if (currentNode.value === value) return true;

        if (value < currentNode.value) {
            return this.rContains(value, currentNode.left)
        } else {
            return this.rContains(value, currentNode.right);
        }
    }

    #rInsert(value, currentNode = this.root) {
        if (currentNode === null) return new Node(value);

        if (value < currentNode.value) {
            currentNode.left = this.#rInsert(value, currentNode.left);
        } else if (value > currentNode.value) {
            currentNode.right = this.#rInsert(value, currentNode.right)
        }

        return currentNode;
    } 

    rInsert(value) {
        if (this.root === null) this.root = new Node(value);
        this.#rInsert(value);
    }

    #deleteNode(value, currentNode) {
        if (currentNode === null) return null;

        if (value < currentNode.value) {
            currentNode.left = this.#deleteNode(value, currentNode.left);
        } else if (value > currentNode.value) {
            currentNode.right = this.#deleteNode(value, currentNode.right);
        } else {
            if (currentNode.left === null && currentNode.right === null) {
                return null;
            } else if (currentNode.left === null) {
                currentNode = currentNode.right;
            } else if (currentNode.right === null) {
                currentNode = currentNode.right;
            } else {
                let subTreeMin = this.minValue(currentNode.right);
                currentNode.value = subTreeMin;
                currentNode.right = this.#deleteNode(subTreeMin, currentNode.right);
            }
        }

        return currentNode;
    }

    deleteNode(value) {
        this.root = this.#deleteNode(value, this.root);
    }

    minValue(currentNode) {
        while(currentNode.left != null) {
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }

}

const myTree = new BST();
// myTree.insert(47);
// myTree.insert(21);
// myTree.insert(76);
// myTree.insert(18);

// myTree.insert(27);
// myTree.insert(52);
// myTree.insert(82);

// console.log('\nMinValue from root:');
// console.log(myTree.minValue(myTree.root));

// console.log('\nMinValue from root->right:');
// console.log(myTree.minValue(myTree.root.right));

myTree.rInsert(2);
myTree.rInsert(1);
myTree.rInsert(3);

console.log('\nRoot: ' + myTree.root.value);
console.log('\nRoot->Left: ' + myTree.root.left.value);
console.log('\nRoot->Right: ' + myTree.root.right.value);

myTree.deleteNode(2);

console.log("\n\n After Deleting (2) Node: ");
console.log("------------------------------");
console.log("Root: " + myTree.root.value);
console.log("Root->Left: " + myTree.root.left.value);
console.log("Root->Right: " + myTree.root.right);
