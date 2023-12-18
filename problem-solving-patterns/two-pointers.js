function sumTwo(arr, target) {
    let left = 0, right = arr.length -1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target) return [arr[left], arr[right]];

        if (sum < target ) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

console.log(sumTwo([1, 2, 3, 4, 6], 6));