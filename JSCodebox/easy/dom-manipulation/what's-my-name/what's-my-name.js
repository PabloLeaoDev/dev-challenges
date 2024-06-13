function whatIsMyName() {
    const firstName = document.querySelector('#firstname').value
    const lastName = document.querySelector('#lastname').value  
    const fullName = document.querySelector('#fullname')
    
    if (firstName && lastName) {
        fullName.innerHTML = `${firstName} ${lastName}`
    } else if (firstName || lastName) {
        if (firstName) {
            fullName.innerHTML = `${firstName} #`
        } else {
            fullName.innerHTML = `# ${lastName}`
        }
    } else {
        fullName.innerHTML = `# #`
    }
}

// ou

function whatIsMyName1() {
    const fName = document.getElementById('firstname').value || '#'
    const lName = document.getElementById('lastname').value || '#'
    document.getElementById('fullname').value=`${fName} ${lName}`
}