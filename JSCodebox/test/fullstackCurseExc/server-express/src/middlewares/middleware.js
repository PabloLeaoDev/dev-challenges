exports.globalMiddleware = (req, res, next) => {
    console.log(`\n${req.body.nome}, você passou pelo Mr. Middleware\n`);
    next();
}