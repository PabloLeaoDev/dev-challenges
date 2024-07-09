function palindrome(pali) {
    let reverseWord = '';
    let paliLength = pali.length - 1;
    for (let i = paliLength; i >= 0; i--) {
        reverseWord += pali[i];
    }
    let isPali = reverseWord === pali;
    return isPali;
}

// or

function palindrome1(pali) {
    return pali === pali.split("").reverse().join("");
}

console.log(palindrome('racecar')); 
console.log(palindrome('eye'));
console.log(palindrome('baseball'));
console.log(palindrome1('otto'));
console.log(palindrome1('rotators'));