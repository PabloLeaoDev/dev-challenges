function camelCase(n) {
    let arrayN = n.split(' ')
    if (arrayN.length > 1) {
        arrayN[0] = arrayN[0].toLowerCase()
    } else {
        arrayN[0] = arrayN[0].split('')
        arrayN[0][0] = arrayN[0][0].toLowerCase()
        arrayN[0] = arrayN[0].join('')
    }
    for (let i = 1; i < arrayN.length; i++) {
        if (arrayN[i][0] === arrayN[i][0].toLowerCase()) {
            arrayN[i] = arrayN[i].toUpperCase()
            let newArray = arrayN[i].split('')
            for (let idx = 1; idx < newArray.length; idx++) {
                newArray[idx] = newArray[idx].toLowerCase()
            }
            arrayN[i] = newArray.join('')
        } 
    }
    
    return arrayN.join('')
}

console.log(camelCase('Camel Case'))
console.log(camelCase('String not found'))
console.log(camelCase('CamelCase'))