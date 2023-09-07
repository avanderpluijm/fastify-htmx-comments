"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetPost = void 0;
const comment_service_1 = require("../comment/comment.service");
const posts_service_1 = require("./posts.service");
const handleGetPost = async (request, reply) => {
    const slug = request.params.slug;
    const post = (0, posts_service_1.getPostBySlug)(slug);
    const comments = (0, comment_service_1.fetchComments)();
    return reply.view('/pages/post.ejs', { post, comments });
};
exports.handleGetPost = handleGetPost;
//# sourceMappingURL=post.controller.js.map