import { fetchComments } from '../comment/comment.service';
import { getPostBySlug } from './posts.service';

export const handleGetPost: any = async (request: any, reply: any) => {
  const slug = request.params.slug;
  const post = getPostBySlug(slug);
  const comments = fetchComments();

  return reply.view('/pages/post.ejs', { post, comments });
};
