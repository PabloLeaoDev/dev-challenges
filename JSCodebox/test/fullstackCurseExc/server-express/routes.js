const express= require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');

route.get('/', homeController.initialPage);

//               parâmetro opcional

// route.get('/testes/:idUser?/:param?', (req, res) => {
    // console.log(req.params);
    // console.log(req.query);
    // res.send(req.params);
// })

route.post('/', homeController.treatPost);

module.exports = route;