/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
    let length = s.length - 1;
    let temp = '';
    let left = 0;
    let right = length;

    while(left < right) {
        temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        left++;
        right--
    }

    return s;
};

let s = ["H","a","n","n","a","h"];

console.log(reverseString(s));
