import { Box, Button, Grid, Link, TextField, Typography, Toolbar } from '@mui/material';
import { NavBar, SideBar } from "../components";

const drawerWidth = 280;
export const JournalLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate_faster">
            {/* Navbar drawerWidth */}
            <NavBar drawerWidth={drawerWidth} />
            <SideBar drawerWidth={drawerWidth} />
            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Toolbar />
                {children}

            </Box>

        </Box>
    )
}