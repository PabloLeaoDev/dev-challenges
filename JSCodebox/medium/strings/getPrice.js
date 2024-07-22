function getPrice(item) {
    const toStr = item.split('');
    let price = [];
    let count = 0;
    toStr.map(e => {
        if (e === '(') {
            for (let i = 1; i <= 5; i++) {
                price.push(item[count + i]);
            } 
        }
        count++;
    });
    return price.join('');
}

// or

function getPrice(item) {
    return item.split('(')[1].split(')')[0];
}

// or

function getPrice(item) {
    const matchEl = item.match(/[$.0-9]/g);
    const prise = matchEl.join('');
    return prise;  
}

// or

function getPrice(item) {
    let a = item.indexOf("(");
    let b = item.substring(a + 1, a + 6);
    return b;
}

console.log(getPrice('Ice ($4.20)'));
console.log(getPrice('Sandwich ($3.50)'));
console.log(getPrice('Milk ($0.99)'));
console.log(getPrice('Potatoe salad ($6.50)'));
console.log(getPrice('Chips ($1.35)'));