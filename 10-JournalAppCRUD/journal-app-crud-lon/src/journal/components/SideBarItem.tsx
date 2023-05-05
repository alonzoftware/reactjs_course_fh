import TurnedInNot from "@mui/icons-material/TurnedInNot";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { iNote, setActiveNote } from "../../store/journal";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
export const SideBarItem = ({ note }: { note: iNote }) => {

    const dispatch = useDispatch();
    const shortTitle = useMemo(() => {
        return note.title.length > 17 ?
            note.title.substring(0, 17) + '...'
            :
            note.title;
    }
        , [note.title]);

    const onClickNote = () => {
        dispatch(setActiveNote(note));
    }
    return (
        <ListItem disablePadding>
            <ListItemButton
                onClick={onClickNote}
            >
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
