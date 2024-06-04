function firstJSON(key, value) {
    return `{"${key}":"${value}"}`
}

// ou

function firstJSON(key, value) {
    const keys = JSON.stringify(key)
    const values = JSON.stringify(value)
    
    return `{${keys}:${values}}`
}