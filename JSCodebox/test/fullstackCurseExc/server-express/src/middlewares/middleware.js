exports.globalMiddleware = (req, res, next) => {
    res.locals.aLocalVariable = 'Local Variable Value';
    next();
}

exports.checkCrsfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404');
    }
    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}