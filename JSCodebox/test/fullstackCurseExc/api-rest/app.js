import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import homeRt from './src/routes/homeRt';
import userRt from './src/routes/userRt';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRt);
    this.app.use('/users/', userRt);
  }
}

export default new App().app;
