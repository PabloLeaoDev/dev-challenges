function reverseLetters(chars) {
    let newArray = []
    for (let i = chars.length - 1; i >= 0; i--) {
        newArray.push(chars[i])
    }
    return newArray
}

console.log(reverseLetters(['a','r','s','t','j','e','e','a','y']))
console.log(reverseLetters([]))

// ou

function reverseLetters2(chars) {
    return chars.reverse()
}