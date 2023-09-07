"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostBySlug = exports.getPosts = void 0;
const posts = [{ slug: 'one' }, { slug: 'two' }, { slug: 'three' }];
const getPosts = () => posts;
exports.getPosts = getPosts;
const getPostBySlug = (slug) => posts.find((post) => post.slug == slug);
exports.getPostBySlug = getPostBySlug;
//# sourceMappingURL=posts.js.map