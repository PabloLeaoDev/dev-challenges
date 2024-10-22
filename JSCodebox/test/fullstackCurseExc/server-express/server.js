require('dotenv').config();

const path = require('path');

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STR)
    .then(() => {
        app.emit('ready');
    })
    .catch((e) => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const { globalMiddleware } = require('./src/middlewares/middleware');

// trata o PUT e POST
app.use(express.urlencoded({ extended: true}));
app.use(globalMiddleware);
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(routes);

const sessionOptions = session({
    secret: 'anything',
    store:  MongoStore.create({ mongoUrl: process.env.CONNECTION_STR }),
    resave: false,
    saveUnitialized: false,
    cookie: {
        maxAge: 1000 * 60
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

const PORT = 3000;

app.on('ready', () => {
    app.listen(PORT, () => {
        console.log(`Servidor executando na porta ${PORT}`);
        console.log(`Acessar http://localhost:${PORT}`);
    });
});