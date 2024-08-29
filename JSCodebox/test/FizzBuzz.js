for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log(`FizzBuzz`);
    else if (i % 3 === 0) console.log(`Fizz`);
    else if (i % 5 === 0) console.log(`Buzz`);
    else console.log(i);
}

console.log('\nAnother soluction option\n');

for (let i = 1; i <= 100; i++) {
    let out = '';
    i % 3 === 0 ? out += 'Fizz' : '';
    i % 5 === 0 ? out += 'Buzz' : '';
    out !== '' ? console.log(out) : console.log(i);
}