import { FastifyInstance } from 'fastify';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import { db } from '../database';

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const transactions = await db('transactions').select();

    return { transactions };
  });

  app.get('/:id', async (request) => {
    const getTransactionParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = getTransactionParamsSchema.parse(request.params);

    const transaction = await db('transactions').where('id', id).first();

    return { transaction };
  });

  app.get('/summary', async () => {
    const summary = await db('transactions')
      .sum('amount', { as: 'amout' })
      .first();

    return { summary };
  });

  app.post('/', async (request, reply) => {
    const createTransactionBody = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    });

    const { title, amount, type } = createTransactionBody.parse(request.body);

    await db('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
    });

    return reply.status(201).send();
  });
}
