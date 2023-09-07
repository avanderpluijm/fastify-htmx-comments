"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetPost = void 0;
const comments_1 = require("../services/comments");
const posts_1 = require("../services/posts");
const handleGetPost = async (request, reply) => {
    const slug = request.params.slug;
    const post = (0, posts_1.getPostBySlug)(slug);
    const comments = (0, comments_1.fetchComments)();
    return reply.view('/pages/post.ejs', { post, comments });
};
exports.handleGetPost = handleGetPost;
//# sourceMappingURL=post.js.map