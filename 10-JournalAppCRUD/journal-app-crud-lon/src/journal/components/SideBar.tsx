import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth = 240 }: { drawerWidth: number }) => {

    const { displayName } = useSelector((state: RootState) => state.auth);
    const { notes } = useSelector((state: RootState) => state.journal);

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
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {

                        // ['January', 'February', 'March', 'April'].map((text) => (
                        notes.map((note) => (
                            <SideBarItem key={note.id} note={note} ></SideBarItem>

                        ))
                    }
                </List>

            </Drawer>


        </Box>
    )
}
