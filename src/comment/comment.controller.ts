import { fetchComments } from "./comment.service";

export const handleCreateComment: any = (request: any, reply: any) => reply.send(`<li>${request.body.comment}</li>`);
export const handleGetComments: any = (req:any, res:any) => {
    const comments = fetchComments(); 
    let commentHtml = '';
    comments.map(comment => {
        commentHtml += `<li>${comment.comment}</li>`
    })
    return res.send(commentHtml)
}