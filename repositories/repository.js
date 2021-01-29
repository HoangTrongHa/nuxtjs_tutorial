import PostRepository from '~/repositories/postResponsitory'
import commentRepository from '~/repositories/commentRepository'
import replyRepository from '~/repositories/replyRepository'
export default ($axios) => ({
    post: PostRepository($axios),
    comment: commentRepository($axios),
    reply: replyRepository($axios)
})