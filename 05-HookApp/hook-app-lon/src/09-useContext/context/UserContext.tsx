import { createContext } from 'react'
export interface iUser {
    email: String, id: number, name: String,
}
export interface ContextState {
    // set the type of state you want to handle with context e.g.
    user: iUser
    setUser: React.Dispatch<React.SetStateAction<iUser>> // Function
}
export const UserContext = createContext({} as ContextState);