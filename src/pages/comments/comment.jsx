import { styled } from '@mui/material/styles'
import { COMMENTS } from '../../data'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import MuiAvatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import MuiButtonGroup from '@mui/material/ButtonGroup'
import MuiButton from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

import ReplyIcon from '@mui/icons-material/Reply';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

const Avatar = styled(MuiAvatar)(({ theme }) => ({ 
    width: theme.typography.pxToRem(30),
    height: theme.typography.pxToRem(30),
    fontSize: theme.typography.pxToRem(16)
}))

const ButtonGroup = styled(MuiButtonGroup)(({ theme }) => ({
    backgroundColor: theme.palette.grey['100'],
    textAlign: 'center',
    '& svg': {
        color: theme.palette.grey['400']
    }
}))

const Button = styled(MuiButton)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'capitalize'
}))


const Comment = ({ id, content, createdAt, score, user, replies, parentId = 'p' }) => {
    return (
        <Box display='flex' flexDirection='column' gap={2}>
            {
                user && (
                    <Paper>
                        <Box padding={2} display='flex' gap={2} alignItems='flex-start'>
                            <ButtonGroup orientation='vertical' variant='text'>
                                <IconButton><AddIcon fontSize='small' /></IconButton>
                                <Typography color='primary' fontWeight='bold'>{score}</Typography>
                                <IconButton><RemoveIcon fontSize='small' /></IconButton>
                            </ButtonGroup>

                            <Box>
                                <Box display='flex' justifyContent='space-between'>
                                    <Box display='flex' alignItems='center' flexWrap='wrap' gap={2} marginBottom={2}>
                                        <Avatar alt={user.username} src={user.image.webp} />
                                        <Typography fontWeight='bold' component='span'>{user.username}</Typography>
                                        <Typography color='GrayText' variant='body2'>{createdAt}</Typography>
                                    </Box>
                                    <Box>
                                        <Button size='small' startIcon={<ReplyIcon />}>Reply</Button>
                                        {/* <Button startIcon={<EditIcon />}>Edit</Button>
                                        <Button color='error' startIcon={<DeleteIcon />}>Delete</Button> */}
                                    </Box>
                                </Box>
                                
                                <Typography>
                                    { parentId !== 'p' && <Typography color='primary' fontWeight='bold' component='span'>{`@${COMMENTS[parentId].user.username}`}</Typography> }
                                    {` ${content}`}
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                )
            }
            <Box 
                paddingLeft={user ? 4 : 0}
                sx={user && {
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        width: '1px',
                        height: 'calc(100% - 16px)',
                        backgroundColor: '#f5f5f5',
                        left: '13px'
                    }
                }}
            >
                { replies.map(replyId => <Comment key={replyId} {...COMMENTS[replyId]} parentId={id} />) }
            </Box>
        </Box>
    )
}

export default Comment
