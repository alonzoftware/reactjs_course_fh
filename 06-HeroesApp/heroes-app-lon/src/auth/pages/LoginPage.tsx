import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
export const LoginPage = () => {
    const { login, logged } = useContext(AuthContext);
    console.log(logged);
    const navigate = useNavigate();
    const onLogin = () => {
        login('Alonzo Choque');
        navigate('/', {
            replace: true
        })
    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button className="btn btn-primary"
                onClick={onLogin}>
                Login
            </button>
        </div>
    )
}
