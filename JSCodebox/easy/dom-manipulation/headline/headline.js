function printHeadline(headline) {
    let h1 = document.createElement('h1')
    document.body.appendChild(h1)
    h1.innerHTML = headline
}

// ou

function printHeadline1(headline) {
    document.write(`<h2>${headline}</h2>`)
}

// ou

function printHeadline2(headline) {
    document.body.innerHTML += `<h3>${headline}</h3>`;
}

printHeadline('teste')
printHeadline1('teste1')
printHeadline2('teste2')