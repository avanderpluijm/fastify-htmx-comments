import { FastifyPluginAsync } from 'fastify';

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply: any) {
    return reply.view('/pages/index.ejs');
  });
};

export default root;
