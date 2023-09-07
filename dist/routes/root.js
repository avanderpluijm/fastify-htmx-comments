"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const root = async (fastify, opts) => {
    fastify.get('/', async function (request, reply) {
        return reply.view('/pages/index.ejs');
    });
};
exports.default = root;
//# sourceMappingURL=root.js.map