function checkPassword(password, password_repeat) {
    const isEqual = password === password_repeat ? true:false
    if(isEqual && password.length >= 20) {
        return true
    } else {
        return false
    }
}

console.log(checkPassword('gizzard-fiesta-dispel-disgorge-never-chisel', 'gizzard-fiesta-dispel-disgorge-never-chisel'));