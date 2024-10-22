exports.globalMiddleware = (req, res, next) => {
    res.locals.aLocalVariable = 'Local Variable Value';
    next();
}