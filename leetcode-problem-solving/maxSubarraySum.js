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

function maxSubarraySum1(arr, k) {
    let maxSub = 0, windowSub = 0;

    for (let i = 0; i < k; i++) {
        windowSub += arr[i];
    }

    for (let i = k; i < arr.length; i++) {
        windowSub += arr[i] - arr[i - k];
        maxSub = Math.max(windowSub, maxSub);
    }

    return maxSub;
}

console.log(maxSubarraySum1([2, 1, 5, 1, 3, 2], 3));
