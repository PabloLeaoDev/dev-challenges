import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { resolve } from 'path';
import homeRt from './src/routes/homeRt';
import userRt from './src/routes/userRt';
import tokenRt from './src/routes/tokenRt';
import studentRt from './src/routes/studentRt';
import photoRt from './src/routes/photoRt';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRt);
    this.app.use('/users/', userRt);
    this.app.use('/tokens/', tokenRt);
    this.app.use('/students/', studentRt);
    this.app.use('/photos/', photoRt);
  }
}

export default new App().app;
