/**
 * Frequency Counter - sameFrequency
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 *
 * Your solution MUST have the following complexities:
 *
 * Time: O(N)
 *
 * Sample Input:
 *
 * sameFrequency(182,281) // true
 * sameFrequency(34,14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22,222) // false
 * 
 * @param {array} num1 an array of integer
 * @param {array} num2 an array of integer
 */

function sameFrequency(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();

    if (num1.length !== num2.length) return false;

    let frequency1 = {};
    let frequency2 = {};

    for (let val of num1) {
        frequency1[val] = (frequency1[val] | 0) + 1;
    }

    for (let val of num2) {
        frequency2[val] = (frequency2[val] || 0) + 1;
    }

    for (let key in frequency1) {
        if (!(key in frequency2)) return false;

        if (frequency1[key] !== frequency2[key]) {
            return false;
        }
    }

    return true;
}

console.log(sameFrequency(182,281));
