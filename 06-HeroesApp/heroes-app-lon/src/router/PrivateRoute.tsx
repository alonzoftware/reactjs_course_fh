import { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';
export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { logged } = useContext(AuthContext);
    const { pathname, search } = useLocation();
    const lastPath = pathname + search;

    useEffect(() => {
        // console.log('Saving ...');
        localStorage.setItem('lastPath', lastPath);
    }, [pathname, search])



    return (logged)
        ? children
        : <Navigate to="/login" />
}
