function strangeWord(word) {
    let newStr = ''
    for (let i = 0; i < word.length; i += 2) {
        newStr += word[i]
    }
    return newStr
}

console.log(strangeWord('JSCodebox'))