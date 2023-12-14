function maxSubarraySum(arr, k) {
    let maxSum = 0, windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9

// ✅ Time Complexity: O(n)
// ✅ Space Complexity: O(1) (No extra space needed)
