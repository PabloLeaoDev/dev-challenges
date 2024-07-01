function firstHello(sentence) {
    const helloArr = ['H', 'e', 'l', 'l', 'o'];
    let helloIdx = 0;
    for (let i = 0; i < helloArr.length; i++) {
        if (sentence[helloIdx] === helloArr[i]) {
            helloIdx++;
        } else {
            return false;
        }
    }
    return true;
}

// ou

function firstHello1(sentence) {
    return sentence.startsWith('Hello');
}

// ou

function firstHello2(sentence) {
    const sp = sentence.split(' ');
    if(sp[0].match(/Hello/)) {
        return true;
    }
    return false;
}

// ou

function firstHello(sentence) {
    let word ="Hello";
    if (sentence.slice(0, word.length) === "Hello") {return true;}
    else {return false;}
}

// ou

function firstHello(sentence) {
    sentence.trim();
    return sentence.indexOf("Hello") === 0;
}

// ou

function firstHello(sentence) {
    return sentence.substring(0, 5) === "Hello" ? true: false;
}

console.log(firstHello('Hello, World!'));
console.log(firstHello('Hell, yeah!'));