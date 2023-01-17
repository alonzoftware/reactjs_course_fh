import { Link as RouterLink } from 'react-router-dom';
import Google from "@mui/icons-material/Google";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (
        <AuthLayout title='Create Account'>
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Full Name"
                            type="text"
                            placeholder='Your Name'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder='correo@google.com'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder='*****'
                            fullWidth
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={12}>
                            <Button variant="contained" fullWidth>
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
