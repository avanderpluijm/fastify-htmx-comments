
import { FastifyPluginAsync } from 'fastify';
import { handleCreateComment, handleGetComments } from '../../comment/comment.controller';

const comment: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post('/', handleCreateComment);  
  fastify.get('/', handleGetComments)
};

export default comment;
