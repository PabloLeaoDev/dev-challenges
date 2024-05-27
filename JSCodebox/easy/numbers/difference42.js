function difference42(n) {
    let difference = n - 42
    if(difference < 0) {
        return difference * (-1)
    } else {
        return difference
    }
}

// ou 

function difference62(n) {
    return Math.abs(n - 62)
}

console.log(difference42(7))
console.log(difference62(342))