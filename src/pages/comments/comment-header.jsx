import { styled } from '@mui/material/styles'
import { useUser } from '../../store/user-ctx'
import { useDialog } from '../../store/dialog-ctx'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MuiButton from '@mui/material/Button'
import MuiAvatar from '@mui/material/Avatar'

import ReplyIcon from '@mui/icons-material/Reply';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CommentHeader = ({ user, createdAt, id, parentId }) => {
    const [loggedInUser] = useUser()
    const [, toggle] = useDialog()

    // is comment owned by the logged in user
    const isOwned = user?.username === loggedInUser?.username

    function onDeleteHandler() {
        toggle({ id, parentId })
    }

    return (
        <Box display='flex' justifyContent='space-between'>
            <Box display='flex' alignItems='center' flexWrap='wrap' gap={2} marginBottom={2}>
                <Avatar alt={user.username} src={user.image.webp} />
                <Typography fontWeight='bold' component='span'>{user.username}</Typography>
                { isOwned && <SelfBadge variant='caption'>You</SelfBadge> }
                <Typography color='GrayText' variant='body2'>{createdAt}</Typography>
            </Box>
            <Box>
                {
                    isOwned ? (
                        <>
                            <Button onClick={onDeleteHandler} color='error' startIcon={<DeleteIcon />}>Delete</Button>
                            <Button startIcon={<EditIcon />}>Edit</Button>
                        </>
                    ) :
                        <Button size='small' startIcon={<ReplyIcon />}>Reply</Button>
                }
            </Box>
        </Box>
    )
}

export default CommentHeader

const Avatar = styled(MuiAvatar)(({ theme }) => ({ 
    width: theme.typography.pxToRem(30),
    height: theme.typography.pxToRem(30),
    fontSize: theme.typography.pxToRem(16)
}))

const Button = styled(MuiButton)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'capitalize'
}))

const SelfBadge = styled(Typography)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: '0 4px',
    borderRadius: 2,
    textAlign: 'center',
    fontSize: '11px'
}))
