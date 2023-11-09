function hash(key, arrLength) {
    let total = 0;
    let WEIRD_PRIME = 31

    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let value = char.charCodeAt(0) - 96;
        total = (WEIRD_PRIME * total + value) % arrLength;
    }

    return total;
}

console.log(hash('hi', 13));
