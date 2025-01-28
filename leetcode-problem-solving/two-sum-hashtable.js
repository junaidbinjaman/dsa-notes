function twoSum(arr, target) {
    if (!arr || arr.length < 2) return [];
    let numMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        const complement = target - num;
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        numMap.set(num, i);
    }

    return [];
}

// ---------------
// Unique Solution
// ---------------
console.log('Unique Solution:');
console.log('Input: [2, 7, 11, 15], Target: 9');
console.log('Output: ', JSON.stringify(twoSum([2, 7, 11, 15], 9)));
console.log('---------------');

// // ---------------
// // Duplicate Numbers
// // ---------------
// console.log("Duplicate Numbers:");
// console.log("Input: [3, 3, 11, 15], Target: 6");
// console.log("Output: ", JSON.stringify(twoSum([3, 3, 11, 15], 6)));
// console.log("---------------");

// // ---------------
// // No Solution
// // ---------------
// console.log("No Solution:");
// console.log("Input: [2, 7, 11, 15], Target: 30");
// console.log("Output: ", JSON.stringify(twoSum([2, 7, 11, 15], 30)));
// console.log("---------------");

// // ---------------
// // Negative Numbers
// // ---------------
// console.log("Negative Numbers:");
// console.log("Input: [-1, -2, -3, -4, -5], Target: -8");
// console.log("Output: ", JSON.stringify(twoSum([-1, -2, -3, -4, -5], -8)));
// console.log("---------------");

// // ---------------
// // Empty Array
// // ---------------
// console.log("Empty Array:");
// console.log("Input: [], Target: 0");
// console.log("Output: ", JSON.stringify(twoSum([], 0)));
// console.log("---------------");
