"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComment = exports.fetchComments = void 0;
const faker_1 = require("@faker-js/faker");
const fetchComments = () => Array.from(new Array(5), () => (0, exports.createComment)());
exports.fetchComments = fetchComments;
const createComment = (comment) => ({
    id: faker_1.faker.string.uuid(),
    comment: comment || faker_1.faker.lorem.paragraph(),
    username: faker_1.faker.person.firstName(),
});
exports.createComment = createComment;
//# sourceMappingURL=comments.js.map