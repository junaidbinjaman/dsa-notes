function bubbleSort(arr) {
    let n = arr.length;
    let swap;

    do {
        swap = false;
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swap = true;
            }
        }
        n--
    } while (swap)

    return arr;
}

console.log(bubbleSort([12, 6, 11, 50, 32])); // Output: [6, 11, 12, 32, 50]
// console.log(bubbleSort([1, 2, 3, 4, 5]));      // Output: [1, 2, 3, 4, 5] (Early exit)
// console.log(bubbleSort([5, 4, 3, 2, 1]));      // Output: [1, 2, 3, 4, 5] (Worst-case)

