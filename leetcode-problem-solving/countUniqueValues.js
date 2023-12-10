// Solution using multi pointer approach.
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]; // Move unique value forward
        }
    }

    return i + 1; // Unique count
}

console.log(countUniqueValues([1, 1, 2, 2, 3, 4, 4, 5])); // Output: 5
