function repeater(string, n) {
    let section = [];
    for (let i = 0; i < n; i++) {
        if (string) {
            section.push(string[i]);
        }
    }
    const secJoin = section.join('');
    let otherSec = '';
    for (let j = 0; j < n; j++) {
        if (section) {
            section.pop();
            let newSec = section.join('');
            otherSec += newSec;
        }
    }
    return secJoin + otherSec;
}

// ou

function repeater1(string, n) {
    let arr = [];

    for(let loopStr = string,  i = n; i > 0; i--) {
        arr.push(loopStr.slice(0,i));
    }

    return arr.join('');
}

console.log(repeater('JSCodebox', 6));
console.log(repeater('', 2));