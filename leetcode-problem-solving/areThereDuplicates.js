/**
 * Frequency Counter / Multiple Pointers - areThereDuplicates
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 *
 * Examples:
 * 
 * areThereDuplicates(1, 2, 3) // false
 * areThereDuplicates(1, 2, 2) // true 
 * areThereDuplicates('a', 'b', 'c', 'a') // true 
 * 
 * @param  {...any} arg 
 * @returns boolean
 */

// Solution using frequency counter
function areThereDuplicates(...arg) {
    if (!arg.length) return false;

    let frequency = {};

    for (let val of arg) {
        frequency[val] = (frequency[val] || 0) + 1;
    }

    for (let key in frequency) {
        if (frequency[key] > 1) {
            return true;
        }
    }

    return false;
}

// console.log(areThereDuplicates(1,2,3));

// Solution using two pointer pattern.
// Sorted array is required for this approach.
function areThereDuplicates1(...arg) {
    if (!arg.length) return false;

    arg.sort((a, b) => a - b);

    let i = 0, next = 1;

    for (let val of arg) {
        if (arg[i] === arg[next]) return true;
        i++;
        next++;
    }

    return false;
}

console.log(areThereDuplicates1(1,2,3,1));
