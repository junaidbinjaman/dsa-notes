// Problem Description: Find the maximum sum of a subarray of size k.
// This is naive approach.
function maxSubarraySum(arr, k) {
    let maxSum = -Infinity;

    for (let i = 0; i <= arr.length - k; i++) {
        let sum = 0;

        for (let j = i; j < i + k; j++) {
            sum += arr[j]
        }

        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

// console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9

/**
 * Given an array of integers and a number,
 * write a function called maxSubarraySum,
 * which finds the maximum sum of a subarray with the length of the number passed to the function.
 * 
 * Note that a subarray must consist of consecutive elements from the original array.
 * In the first example below, [100, 200, 300] is a subarray of the original
 */
function maxSubarraySum(arr, num) {
    // 📋 Check if the array is empty or the number is bigger than the array
    if (!arr.length || num > arr.length - 1) {
        return null;
    }

    // 📋 Define the maxSum and windowSum;
    let maxSum = 0, windowSum = 0;

    // 📋 Loop until num and create the windowSum
    for (let i = 0; i < num; i++) {
        windowSum += arr[i];
    }

    // 📋 Add window sum into the maxSum
    maxSum = windowSum;

    // 📋 Loop over the array starting from num
    for (let i = num; i < arr.length; i++) {
        // 📋 Add one element from the right and abstract one from the left
        windowSum += arr[i] - arr[i - num]

        // 📋 Replace maxSum with windowSum is windowSum is greater than maxSum
        maxSum = Math.max(windowSum, maxSum);
    }

    // 📋 Return the maxSum
    return maxSum;
}

// console.log(maxSubarraySum([100,200,300,400], 2)) // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null

// Problem solving approaches.
// 🔷 Understand the problem.
// 🔷 Concrete example.
// 🔷 Break it down.
// 🔷 Solve & simplify.
// 🔷 Look back & refactor.