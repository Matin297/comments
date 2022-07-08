import { useUser } from '../../store/user-ctx'
import { useComments, addComment } from '../../store/comments-ctx'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const CommentForm = ({ parentId = 'p' }) => {
    const [user] = useUser()
    const [, commentsDispatch] = useComments()

    function onSubmitHandler(e) {
        e.preventDefault()
        const { content } = e.target.elements
        const comment = { content: content.value, user }
        addComment({ comment, parentId }, commentsDispatch)
        content.value = ''
    }

    return (
        <Paper>
            <Box 
                display='flex' 
                gap={1} 
                padding={2} 
                alignItems='flex-start' 
                component='form'
                onSubmit={onSubmitHandler}
            >
                <Avatar alt={user.username} src={user.image.webp} />
                <TextField 
                    name='content'
                    required 
                    placeholder='Add a comment...' 
                    multiline 
                    rows={4}
                    sx={{ flexGrow: 1 }}
                />
                <Button type='submit' variant='contained'>Send</Button>
            </Box>
        </Paper>
    )
}

export default CommentForm
