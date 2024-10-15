exports.initialPage = (req, res) => {
    res.render('index');
};

exports.treatPost = (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
}