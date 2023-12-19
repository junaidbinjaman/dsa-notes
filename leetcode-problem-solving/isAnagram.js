/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let value of s) {
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
    }

    for (let value of t) {
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (! (key in frequencyCounter2)) {
            return false;
        }

        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }

    return true;
    
};
