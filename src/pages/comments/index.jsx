import { COMMENTS } from '../../data'

import Box from '@mui/material/Box'
import Comment from './comment'
import CommentForm from './comment-form'

const Comments = () => {
    return (
        <Box width='100%' maxWidth={900} marginX='auto'>
            <Comment {...COMMENTS['p']} />
            <CommentForm />
        </Box>
    )
}

export default Comments
