import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const CommentForm = () => {
    return (
        <Paper>
            <Box display='flex' gap={1} padding={2} alignItems='flex-start'>
                <Avatar />
                <TextField placeholder='Add a comment...' multiline rows={6} sx={{ flexGrow: 1 }} />
                <Button variant='contained'>Send</Button>
            </Box>
        </Paper>
    )
}

export default CommentForm
