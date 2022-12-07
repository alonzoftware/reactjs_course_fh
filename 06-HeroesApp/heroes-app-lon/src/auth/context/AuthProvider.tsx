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
const initialStateFunction = () => {

    if (localStorage.getItem('user')) {
        const userStr = localStorage.getItem('user')!;
        const user = JSON.parse(userStr);

        return {
            user,
            logged: !!user
        };
    } else {
        return initialState;
    }

}



export const AuthProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    // const [user, setUser] = useState(userIni);
    const [authState, dispatch] = useReducer(authReducer, initialState, initialStateFunction);

    const login = (name = '') => {

        const user = {
            id: 'ABC',
            name: name
        }

        const action: iAuthAction = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }

    const logout = () => {
        const user = {
            id: '',
            name: ''
        }
        const action: iAuthAction = {
            type: types.logout,
            payload: user,
        }
        localStorage.removeItem('user');
        dispatch(action);
    }

    return (
        // <AuthContext.Provider value={{ user, setUser }}>
        <AuthContext.Provider value={{
            ...authState,
            login: login,
            logout: logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}