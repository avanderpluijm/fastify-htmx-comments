import { FastifyPluginAsync } from 'fastify';
import { handleGetPost } from '../../post/post.controller';

const post: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/:slug', handleGetPost);
};

export default post;
