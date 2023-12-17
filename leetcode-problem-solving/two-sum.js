/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = nums.map((num, index) => [num, index]);
    arr.sort((a, b) => a[0] - b[0]);

    let left = 0, right = arr.length - 1;

    while(left < right) {
        let sum = arr[left][0] + arr[right][0];

        if (sum === target) return [arr[left][1], arr[right][1]];

        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};

console.log(twoSum([3,2,4], 6));