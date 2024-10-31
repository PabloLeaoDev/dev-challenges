// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     title: 'A test title',
//     description: 'A test description.'
// })
//     .then(data => console.log(data))
//     .catch(e => console.log(e));

exports.initialPage = (req, res) => {
    // req.session.user = { name: 'Fulano', logged: true };
    // console.log(req.session.user);
    res.render('index', {
        title: 'Page Title',
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
};

exports.treatPost = (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
}