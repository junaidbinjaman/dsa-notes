class Stack {
    constructor() {
        this.stackList = [];
    }

    getStackList() {
        return this.stackList;
    }

    printStack() {
        for (let i = this.stackList.length - 1; i >= 0; i--) {
            console.log(this.stackList[i]);
        }
    }

    isEmpty() {
        return this.stackList.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList[this.stackList.length - 1];
        }
    }

    size() {
        return this.stackList.length;
    }

    push(value) {
        this.stackList.push(value);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.stackList.pop();
    }
    
}



function isBalancedParentheses(parentheses) {
    let start = '(', close = ')' // 📋 Define starting and closing parentheses.
    let stack = new Stack();
    
    for (let i = 0; i < parentheses.length; i++) {
        let element = parentheses[i];

        if (element === start) { // 📋 Store all the starting parentheses in one stack.
            stack.push(element);
        } else if(close === element) { // 📋 Store all the closing parentheses in the other stack.
            if (stack.isEmpty() || stack.peek() !== start) {
                return false;
            }

            stack.pop(element);
        }
        
    }

    if (stack.isEmpty()) { // 📋 Return true if matches.
        return true;
    } else {
        return false; // 📋 Return false, if two stack sizes doesn't match.
    }
}



const input1 = "(())";
const expected1 = true;
const result1 = isBalancedParentheses(input1);
console.log(`Input: "${input1}" | Expected: ${expected1} | Result: ${result1}`);

const input2 = "(()))";
const expected2 = false;
const result2 = isBalancedParentheses(input2);
console.log(`Input: "${input2}" | Expected: ${expected2} | Result: ${result2}`);

const input3 = "((()))";
const expected3 = true;
const result3 = isBalancedParentheses(input3);
console.log(`Input: "${input3}" | Expected: ${expected3} | Result: ${result3}`);

const input4 = "(((())";
const expected4 = false;
const result4 = isBalancedParentheses(input4);
console.log(`Input: "${input4}" | Expected: ${expected4} | Result: ${result4}`);

const input5 = ')('
const expected5 = false;
const result5 = isBalancedParentheses(input5);
console.log(`Input: "${input5}" | Expected: ${expected5} | Result: ${result5}`);


/*
    EXPECTED OUTPUT:
    ----------------
    Input: "(())" | Expected: true | Result: true
    Input: "(()))" | Expected: false | Result: false
    Input: "((()))" | Expected: true | Result: true
    Input: "(((())" | Expected: false | Result: false

*/
