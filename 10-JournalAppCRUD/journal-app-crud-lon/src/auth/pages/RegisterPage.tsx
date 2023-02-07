import { Link as RouterLink } from 'react-router-dom';
import Google from "@mui/icons-material/Google";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useMemo } from 'react';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

interface iFormState {
    isSubmited: boolean,
    email: string,
    pass: string,
    displayName: string,
}
interface iFormValidation {
    isFormValid: true,
    emailValid: string,
    passValid: string,
    displayNameValid: string,
}

// const initialFormState = {
//     email: 'alonzo.choque@gmail.com',
//     pass: '1234567',
//     displayName: 'Alonzo Choque',
// }
const initialFormState = {
    isSubmited: false,
    email: '',
    pass: '',
    displayName: '',
}
const initialFormValidation = {
    isFormValid: true,
    emailValid: '',
    passValid: '',
    displayNameValid: '',
}


const formValidations = {
    email: [(value: string) => value.includes('@'), 'The Email must have @'],
    pass: [(value: string) => value.length >= 6, 'The Pass must be greater than 6 characters'],
    displayName: [(value: string) => value.length >= 3, 'The Display Name must be greater than 3 characters'],
}

export const RegisterPage = () => {
    const { status, errorMessage } = useSelector((state: RootState) => state.auth);
    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const { formState, onInputChange, onResetForm, onSubmitForm, formValidation } = useForm(initialFormState, initialFormValidation, formValidations);
    const { isSubmited, email, pass, displayName } = formState as iFormState;
    const { isFormValid, emailValid, passValid, displayNameValid } = formValidation as iFormValidation

    const dispatch = useDispatch();
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmitForm();
        if (!isFormValid) return;

        dispatch(startCreatingUserWithEmailPassword({ email, pass, displayName }));
    }


    return (
        <AuthLayout title='Create Account'>
            <h2>isFormValid : {JSON.stringify(isFormValid)}</h2>
            <h2>isSubmited : {JSON.stringify(isSubmited)}</h2>
            <form
                onSubmit={event => onSubmit(event)}
                className="animate__animated animate__fadeIn animate_faster">
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Full Name"
                            type="text"
                            placeholder='Your Name'
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={displayNameValid.length > 0 && isSubmited}
                            helperText={displayNameValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder='correo@google.com'
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={emailValid.length > 0 && isSubmited}
                            helperText={emailValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder='*****'
                            fullWidth
                            name="pass"
                            value={pass}
                            onChange={onInputChange}
                            error={passValid.length > 0 && isSubmited}
                            helperText={passValid}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} display={errorMessage != '' ? '' : 'none'}>
                        <Alert severity='error'>{errorMessage}</Alert>
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={12}>
                            <Button
                                disabled={isAuthenticating}
                                type="submit"
                                variant="contained"
                                fullWidth>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}> ¿ Do you have account?</Typography>

                        <Link component={RouterLink} color='inherit' to="/auth/login">
                            Go to Login
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>


    )
}
