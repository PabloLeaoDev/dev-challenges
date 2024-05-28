function is42(a, b) {
    return a === 42 || b === 42 || a + b === 42 ? true:false
}

console.log(is42(42, 0))
console.log(is42(23, 21))