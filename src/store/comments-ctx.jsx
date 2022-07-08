import { createContext, useReducer, useContext } from 'react'
import { COMMENTS } from '../data'

const CommentsContext = createContext({})

const INITIAL_DATA = COMMENTS

// constants
const ADD_COMMENT = 'ADD_COMMENT'
const REMOVE_COMMENT = 'REMOVE_COMMENT'
const UPDATE_COMMENT = 'UPDATE_COMMENT'

// actions
export const addComment = (payload, dispatch) => dispatch({ type: ADD_COMMENT, payload })
export const updateComment = (payload, dispatch) => dispatch({ type: UPDATE_COMMENT, payload })
export const removeComment = (payload, dispatch) => dispatch({ type: REMOVE_COMMENT, payload })

const commentsReducer = (state, { type, payload }) => {
    switch(type) {
        case ADD_COMMENT: {
            // comment -> content*, user*
            const { parentId, comment } = payload

            const id = Date.now()
            const parentComment = state[parentId]

            return {
                ...state,
                [parentId]: {
                    ...parentComment,
                    replies: parentComment.replies.concat(id)
                },
                [id]: {
                    id,
                    score: 0,
                    replies: [],
                    createdAt: new Date().toLocaleString('en-US'),
                    ...comment
                }
            }
        }
        case REMOVE_COMMENT: {
            const { id, parentId } = payload
            const parentComment = state[parentId]
            
            const clonedState = {
                ...state,
                [parentId]: {
                    ...parentComment,
                    replies: parentComment.replies.filter(repId => repId !== id)
                }
            }

            // if comment has any replies, first delete them and so on...
            removeCommentHelper(clonedState, id)

            return clonedState
        }
        case UPDATE_COMMENT:
            return {
                ...state,
                [payload.id]: {
                    ...state[payload.id],
                    ...payload
                }
            }
        default:
            return state
    }
}

export function CommentsProvider({ children }) {
    const reducedComments = useReducer(commentsReducer, INITIAL_DATA)
    return <CommentsContext.Provider value={reducedComments}>{ children }</CommentsContext.Provider>
}

export const useComments = () => useContext(CommentsContext)

// UTILS
function removeCommentHelper(comments, id) {
    const comment = comments[id]
    comment.replies.forEach(repId => removeCommentHelper(comments, repId))
    delete comments[id]
}