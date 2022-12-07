import { createContext } from "react";
// export interface iUser {
//     email: String, id: number, name: String,
// }
export interface AuthContextState {
    // set the type of state you want to handle with context e.g.
    user: { id: string, name: string },
    logged: boolean,
    login: Function, //React.Dispatch<React.SetStateAction<iUser>> // Function
    logout: Function //React.Dispatch<React.SetStateAction<iUser>> // Function
}
// export const UserContext = createContext({} as ContextState);

export const AuthContext = createContext({} as AuthContextState);

