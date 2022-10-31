

import { useState } from 'react';
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';

// const userIni: iUser = {
//     email: "",
//     id: 0,
//     name: "",
// }
const initialState = {
    logged: false,
}

export const UserProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    // const [user, setUser] = useState(userIni);
    const [state, dispatch] = authReducer(authReducer, initialState);

    return (
        // <AuthContext.Provider value={{ user, setUser }}>
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}