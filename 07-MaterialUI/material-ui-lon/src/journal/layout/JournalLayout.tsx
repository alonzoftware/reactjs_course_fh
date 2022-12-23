import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { NavBar } from "../components";

const drawerWidth = 240;
export const JournalLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* Navbar drawerWidth */}
            <NavBar drawerWidth={drawerWidth} />
            {/* Sidebar drawerWidth */}
            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/* Toolbar */}
                {children}

            </Box>

        </Box>


        // <Grid container
        //     spacing={0}
        //     direction="column"
        //     alignItems="center"
        //     justifyContent="center"
        //     sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        // >
        //     <Grid item
        //         className="box-shadow"
        //         xs={3}
        //         sx={{
        //             width: { sm: 450 },
        //             backgroundColor: 'white',
        //             padding: 3,
        //             borderRadius: 2
        //         }}>
        //         <Typography variant="h5" sx={{ mb: 1 }}>{title}</Typography>
        //         {children}
        //     </Grid>

        // </Grid>
    )
}