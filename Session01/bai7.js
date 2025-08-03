const sumArr = (...arr) => {
    return arr.map(arr => arr.reduce((a, b) => a + b, 0));
}

console.log(sumArr([1, 2], [6, 7, 8], [12, 8]));
