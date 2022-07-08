import { createContext, useReducer, useContext } from 'react'
import { USER } from '../data'

const INITIAL_DATA = USER

const UserContext = createContext({})

export function UserProvider({ children }) {
    const reducedUser = useReducer((prevState, payload) => ({ ...prevState, ...payload }), INITIAL_DATA)

    return <UserContext.Provider value={reducedUser}>{ children }</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
