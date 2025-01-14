function firstNonRepeatingChar(str) {
    if (!str) return null;

    const map = new Map();
    let firstNonRepeatChar = null

    for (let i = 0; i < str.length; i++) {
        let frequency = (map.get(str[i]) || 0) + 1;
        map.set(str[i], frequency);
    }

    map.forEach((value, key) => {
        if (value === 1) {
            if (!firstNonRepeatChar) {
                firstNonRepeatChar = key;
            }
        }
    })

    return firstNonRepeatChar;
}

// console.log(firstNonRepeatingChar("aabbcc"));
console.log(firstNonRepeatingChar("aabbcde"));