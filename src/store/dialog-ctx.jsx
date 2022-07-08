import { createContext, useContext, useReducer } from 'react'

const DialogContext = createContext({})

const INITIAL_DATA = {
    open: false,
    payload: null
}

export function DialogProvider({ children }) {
    const reducedDialog = useReducer((prevState, payload) => ({ open: !prevState.open, payload }), INITIAL_DATA)
    return <DialogContext.Provider value={reducedDialog}>{ children }</DialogContext.Provider>
}

export const useDialog = () => useContext(DialogContext)
