import { useReducer, useState } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext'
import { authReducer, iAuthAction } from './authReducer';

// const userIni: iUser = {
//     email: "",
//     id: 0,
//     name: "",
// }
const initialState = {
    user: { id: '', name: '' },
    logged: false,
}

export const AuthProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    // const [user, setUser] = useState(userIni);
    const [authState, dispatch] = useReducer(authReducer, initialState);

    const login = (name = '') => {
        const action: iAuthAction = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: name
            }
        }
        dispatch(action);
    }

    return (
        // <AuthContext.Provider value={{ user, setUser }}>
        <AuthContext.Provider value={{
            ...authState,
            login: login
        }}>
            {children}
        </AuthContext.Provider>
    )
}