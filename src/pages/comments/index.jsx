import { useComments } from '../../store/comments-ctx'

import Box from '@mui/material/Box'
import Comment from './comment'
import CommentForm from './comment-form'
import RemoveCommentDialog from './remove-comment-dialog'

const Comments = () => {
    const [comments] = useComments()
    return (
        <Box width='100%' maxWidth={900} marginX='auto'>
            <Comment {...comments['p']} parentId='p' />
            <CommentForm />
            <RemoveCommentDialog />
        </Box>
    )
}

export default Comments
