import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Google from "@mui/icons-material/Google";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { checkingAuthentication,startGoogleSignIn } from '../../store/auth';

interface iFormState {
    email: string,
    pass: string,
}

export const LoginPage = () => {
const { status } = useSelector((state: RootState) => state.auth);
const isAuthenticating = useMemo(()=> status === 'checking', [status]);

const { formState, onInputChange, onResetForm } = useForm({
    email: 'alonzo.choque@gmail.com', 
    pass: '1234567'
});
const { email, pass } = formState as iFormState;

const dispatch = useDispatch();
// useEffect(() => {
//     dispatch(getPokemons());
// }, []);



const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log ({email, pass});
    dispatch(checkingAuthentication(email, pass));
}
const onGoogleSignIn = ()=>{
    console.log('onGoogleSignIn')
    dispatch(startGoogleSignIn());
}
    return (
        <AuthLayout title='Login'>
            <form onSubmit={event => onSubmit(event)} aria-label="formMain">
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder='correo@google.com'
                            fullWidth
                            name="email"
                            value= {email}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder='*****'
                            fullWidth
                            name="pass"
                            value= {pass}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                            disabled={isAuthenticating} 
                            type='submit' 
                            variant="contained" 
                            fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button 
                            disabled={isAuthenticating} 
                            onClick={onGoogleSignIn}
                            variant="contained" fullWidth>
                                <Google />
                                <Typography sx={{ ml: 1 }}> Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Link component={RouterLink} color='inherit' to="/auth/register">
                            Create Account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>


    )
}
