import { useDialog } from '../../store/dialog-ctx'
import { useComments, removeComment } from '../../store/comments-ctx'

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button'

const RemoveCommentDialog = () => {
    const [{ open, payload }, toggle] = useDialog()
    const [, commentsDispatch] = useComments()

    const handleDelete = () => {
        removeComment(payload, commentsDispatch)
        toggle();
    };

    const handleClose = () => {
        toggle();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="delete-comment"
            aria-describedby="delete-comment-description"
        >
            <DialogTitle id="delete-comment-title">
                Delete Comment
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="delete-comment-description">
                Are you sure you want to delete this comment? This will remove the
                comment and its replies and can't be undone.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button 
                variant='contained' 
                color='warning' 
                onClick={handleClose}
            >
                No, CANCEL
            </Button>
            <Button 
                color='error' 
                variant='contained' 
                onClick={handleDelete}
            >
                Yes, DELETE
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default RemoveCommentDialog
