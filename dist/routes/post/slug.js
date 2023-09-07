"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_controller_1 = require("../../post/post.controller");
const post = async (fastify, opts) => {
    fastify.get('/:slug', post_controller_1.handleGetPost);
};
exports.default = post;
//# sourceMappingURL=slug.js.map