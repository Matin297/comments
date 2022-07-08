import { styled } from '@mui/material/styles'
import { useComments, updateComment } from '../../store/comments-ctx'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

import Typography from '@mui/material/Typography'
import MuiButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton'

import CommentHeader from './comment-header'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Comment = ({ id, content, createdAt, score, user, replies, parentId = 'p' }) => {
    const [comments, dispatch] = useComments()

    const voteHandler = (vote) => () => updateComment({ score: score + vote, id }, dispatch)

    return (
        <Box display='flex' flexDirection='column' gap={2}>
            {
                user && (
                    <Paper>
                        <Box padding={2} display='flex' gap={2} alignItems='flex-start'>
                            <ButtonGroup orientation='vertical' variant='text'>
                                <IconButton onClick={voteHandler(1)}>
                                    <AddIcon fontSize='small' />
                                </IconButton>
                                <Typography color='primary' fontWeight='bold'>{score}</Typography>
                                <IconButton onClick={voteHandler(-1)}>
                                    <RemoveIcon fontSize='small' />
                                </IconButton>
                            </ButtonGroup>

                            <Box width='100%'>
                                <CommentHeader 
                                    user={user} 
                                    createdAt={createdAt}
                                    parentId={parentId}
                                    id={id}
                                />
                                <Typography>
                                    { 
                                        parentId !== 'p' && 
                                        <Typography 
                                            color='primary' 
                                            fontWeight='bold' 
                                            component='span'
                                        >
                                            {`@${comments[parentId].user.username}`}
                                        </Typography> 
                                    }
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


const ButtonGroup = styled(MuiButtonGroup)(({ theme }) => ({
    backgroundColor: theme.palette.grey['100'],
    textAlign: 'center',
    '& svg': {
        color: theme.palette.grey['400']
    }
}))
