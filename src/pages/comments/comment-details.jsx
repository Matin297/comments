import { useReducer } from 'react'
import { styled } from '@mui/material/styles'
import { useComments, updateComment } from '../../store/comments-ctx'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import MuiButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import CommentHeader from './comment-header'
import CommentForm from './comment-form'

const INIT = { show: false, type: '' }

const CommentDetails = ({ score, id, createdAt, parentId, user, content }) => {
    const [comment, setComment] = useReducer((prev, payload) => ({ ...prev, ...payload }), INIT)
    const [comments, dispatch] = useComments()

    const closeCommentForm = () => setComment(INIT)
    const voteHandler = (vote) => () => updateComment({ score: score + vote, id }, dispatch)

    if (!user) return null

    return (
        <>
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
                            setComment={setComment}
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
            { 
                comment.show && (
                    <CommentForm 
                        parentId={id} 
                        content={comment.type === 'edit' ? content : ''} 
                        commentId={id}
                        closeCommentForm={closeCommentForm}
                    />
                ) 
            }
        </>
    )
}

export default CommentDetails

const ButtonGroup = styled(MuiButtonGroup)(({ theme }) => ({
    backgroundColor: theme.palette.grey['100'],
    textAlign: 'center',
    '& svg': {
        color: theme.palette.grey['400']
    }
}))
