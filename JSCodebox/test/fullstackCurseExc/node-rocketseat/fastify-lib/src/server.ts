import fastify from 'fastify';
import { env } from './env';
import { db } from './database';
import { transactionsRoutes } from './routes/transactions';

import crypto from 'node:crypto';

const app = fastify();

app.register(transactionsRoutes, {
  prefix: 'transactions',
});

app.get('/test', async () => {
  const transactions = await db('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'test',
      amount: 1000,
    })
    .returning('*');

  return transactions;
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!');
  });
