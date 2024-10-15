const path = require('path');

const express = require('express');
const app = express();
const routes = require('./routes');
const { globalMiddleware } = require('./src/middlewares/middleware');

// trata o PUT e POST
app.use(express.urlencoded({ extended: true}));
app.use(globalMiddleware);
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(routes);



app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`);
    console.log(`Acessar http://localhost:${PORT}`);
});