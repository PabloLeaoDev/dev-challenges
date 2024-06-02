function more4than0(n) {
    let four = 0, zero = 0
    n.map((number) => {
        if (number === 4) four += 1
        else if (number === 0) zero += 1
    })
    if (four > zero) {
        return true
    }
    return false
}

// ou

function more4than0(n) {
    let fourN = n.filter((e)=> e === 4);
    let zeroN = n.filter((e)=> e === 0);
    
    if (fourN.length > zeroN.length) {
        return true
    } else {
        return false
    }
}