function httpTohttps(url) {
    let urlArray = url.split('')
    urlArray.splice(4, 0, 's')
    let newUrl = urlArray.join('')
    console.log(newUrl)
}

httpTohttps("http://example.com")

// ou

function http2https(url) {
    const urlList = url.replace(':', 's:')
    console.log(urlList)
}

http2https('http://jscodebox.com/')