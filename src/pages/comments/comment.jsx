import { useComments } from '../../store/comments-ctx'

import Box from '@mui/material/Box'
import CommentDetails from './comment-details'

const Comment = (props) => {
    const { user, replies, id } = props

    const [comments] = useComments()

    return (
        <Box display='flex' flexDirection='column' gap={2}>
            <CommentDetails {...props} />
            <Box 
                paddingLeft={user ? 4 : 0}
                sx={user && {
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        width: '2px',
                        height: 'calc(100% - 16px)',
                        backgroundColor: 'hsl(223, 19%, 93%)',
                        left: '13px'
                    }
                }}
            >
                { replies?.map(replyId => <Comment key={replyId} {...comments[replyId]} parentId={id} />) }
            </Box>
        </Box>
    )
}

export default Comment

