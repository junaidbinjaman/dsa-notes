/**
 * Write a function called minSubArrayLen which accepts two parameters
 * - an array of positive integers and a positive integer.
 * 
 * This function should return the minimal length of a contiguous subarray
 * of which the sum is greater than or equal to the integer passed to the function.
 * If there isn't one, return 0 instead.
 */
function minSubArrayLen(arr, num) {
    // 📋 Define the left pointer, sum of the sub array and minLen.
    let left = 0, sum = 0, minLen = Infinity;

    // 📋 Loop until the end of the array. The right pointer is the array's i.
    for (let right = 0; right < arr.length; right++) {
        // 📋 Add the elements into sum.
        sum += arr[right]

        // 📋 Run the while loop as long as sum is greater or equal to target.
        while (sum >= num) {
            // 📋 Update the minLen with current window size.
            minLen = Math.min(minLen, right - left + 1);

            // 📋 Shrink the window size by removing the left most element from sum.
            sum -= arr[left]

            // 📋 Move left pointer one step.
            left++;
        }   
    }

    // 📋 Return 0 if the minLen is equal to Infinity otherwise return the minLen.
    return minLen === Infinity ? 0 : minLen;
}

// console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0

// ✅ Time complexity: O(n)
// ✅ Space complexity: O(1)
