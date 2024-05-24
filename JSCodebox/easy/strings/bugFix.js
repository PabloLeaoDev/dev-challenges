function bugFix(string) {
    let bug = string.search('bug')
    if (bug > -1) {
        let flower = string.replace('bug', 'flower')
        return flower
    } else {
        return string
    }
}

console.log(bugFix('xxbugYYX'))