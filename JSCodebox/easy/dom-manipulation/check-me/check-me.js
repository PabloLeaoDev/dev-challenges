function checkMe() {
    let checkbox = document.querySelector('#my-checkbox')
    checkbox.checked = true
}

// ou

function checkMe1() {
    let checkbox = document.querySelector('#my-checkbox')
    checkbox.setAttribute('checked', 'checked')
}