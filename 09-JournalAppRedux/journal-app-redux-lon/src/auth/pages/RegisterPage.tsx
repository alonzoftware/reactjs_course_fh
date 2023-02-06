import { Link as RouterLink } from 'react-router-dom';
import Google from "@mui/icons-material/Google";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';


interface iFormState {
    email: string,
    pass: string,
    displayName: string,
}
interface iFormValidation {
    emailValid: string,
    passValid: string,
    displayNameValid: string,
}

const formData = {
    email: 'alonzo.choque@gmail.com',
    pass: '1234567',
    displayName: 'Alonzo Choque',
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


    const { formState, onInputChange, onResetForm, formValidation } = useForm(formData, formValidations);
    const { email, pass, displayName } = formState as iFormState;
    // const { emailValid, passValid, displayNameValid } = formValidation as iFormValidation

    //console.log(displayNameValid);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formState);
        // dispatch(checkingAuthentication(email, pass));
    }


    return (
        <AuthLayout title='Create Account'>
            <form onSubmit={event => onSubmit(event)} >
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
                        // error={displayNameValid.length > 0 ? true : false}
                        // helperText={displayNameValid}
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
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={12}>
                            <Button
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
