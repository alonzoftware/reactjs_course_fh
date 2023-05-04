import TurnedInNot from "@mui/icons-material/TurnedInNot";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { iNote } from "../../store/journal";
import { useMemo } from "react";
export const SideBarItem = ({ note }: { note: iNote }) => {
    const shortTitle = useMemo(() => {
        return note.title.length > 17 ?
            note.title.substring(0, 17) + '...'
            :
            note.title;
    }
        , [note.title]);
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={shortTitle} />
                    <ListItemText secondary={note.body} />
                </Grid>
            </ListItemButton>

        </ListItem>
    )
}
