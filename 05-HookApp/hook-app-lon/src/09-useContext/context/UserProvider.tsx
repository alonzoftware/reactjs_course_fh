import { useState } from 'react';
import { iUser, UserContext } from './UserContext'

const userIni: iUser = {
    email: "",
    id: 0,
    name: "",
}


export const UserProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const [user, setUser] = useState(userIni);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
