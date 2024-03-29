import { AddOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views";
import { NothingSelectedView } from "../views/NothingSelectedView";
// import MailOutline from "@mui/icons-material/MailOutline";

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography variant='h1'>JournalPage</Typography> */}
            {/* <Typography>Eu sint cupidatat consectetur in irure magna labore consectetur ex dolor sunt minim consectetur. Ut dolor tempor consectetur laborum qui amet ea eu. Qui nulla mollit excepteur sint ad sint est.</Typography> */}
            {/* <MailOutline /> */}

            <NothingSelectedView />
            {/* <NoteView /> */}

            <IconButton
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}>
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout >
    )
}
