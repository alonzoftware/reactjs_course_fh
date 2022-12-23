import TurnedInNot from "@mui/icons-material/TurnedInNot";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";

export const SideBar = ({ drawerWidth = 240 }: { drawerWidth: number }) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent"
                open={true}
                sx={{
                    display: { xs: "block" },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>
                        Alonzo Choque
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {

                        ['January', 'February', 'March', 'April'].map((text) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'Voluptate sint sit anim labore est consequat.'} />
                                    </Grid>
                                </ListItemButton>

                            </ListItem>

                        ))
                    }
                </List>

            </Drawer>


        </Box>
    )
}
