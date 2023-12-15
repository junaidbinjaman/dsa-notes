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

console.log(areThereDuplicates(1,2,3));
