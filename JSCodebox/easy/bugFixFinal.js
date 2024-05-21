function bugFixFinal(string) {
    let bug
    let flower = string
    while (true) {
        bug = flower.search('bug')
        if (bug > -1) {
            flower = flower.replace('bug', 'flower')
            continue
        } else {
            return flower
        }
    }
}

// ou

function bugFixFinal1(string) {
	return string.split('bug').join('flower')
}

// ou

function bugFixFinal2(string) {
	return string.replaceAll('bug', 'flower')
}

console.log(bugFixFinal('xxbugbugYYXbugyy'))
console.log(bugFixFinal1('bug'))
console.log(bugFixFinal2('xxbugXbugbugYYy'))
console.log(bugFixFinal('bugXYYbugxX'))
console.log(bugFixFinal1('xxxYYYzbugzyx'))
console.log(bugFixFinal2('xxxYYYzzyx'))