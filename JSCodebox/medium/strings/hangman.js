function hangman(hangmanString) {
    let str = [], count = 0
    const toStr = hangmanString.split('')
    toStr.map((second) => {
        if (count % 2 === 1) {
            str.push(second)
        } else {
            str.push('_')
        }
        count += 1
    })
    return str.join('')
}

// ou 

function hangman1(hangmanString) {
    let str = [];
    for (let i = 0; i < hangmanString.length; i++) {
        if (i % 2 === 1) {
            str.push(hangmanString[i]);
        } else {
            str.push('_');
        }
    }
    return str.join('');
}

// ou 

function hangman2(hangmanString) {
    return hangmanString.split('')
    .map((char, i) => (i % 2 === 0) ? '_' :  char)
    .join('')
}

console.log(hangman('TestString'));