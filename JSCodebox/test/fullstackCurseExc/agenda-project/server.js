require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const flash = require('connect-flash');
const routes = require('./routes');
const { globalMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

mongoose.connect(process.env.CONNECTION_STR)
    .then(() => {
        app.emit('ready');
    })
    .catch((e) => console.log(e));

app.use(helmet());
// trata o PUT e POST
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

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
app.use(csrf());
app.use(globalMiddleware);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(flash());
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

const PORT = 3000;

app.on('ready', () => {
    app.listen(PORT, () => {
        console.log(`Servidor executando na porta ${PORT}`);
        console.log(`Acessar http://localhost:${PORT}`);
    });
});