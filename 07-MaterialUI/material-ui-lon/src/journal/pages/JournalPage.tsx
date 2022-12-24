import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";
// import MailOutline from "@mui/icons-material/MailOutline";

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography variant='h1'>JournalPage</Typography> */}
            {/* <Typography>Eu sint cupidatat consectetur in irure magna labore consectetur ex dolor sunt minim consectetur. Ut dolor tempor consectetur laborum qui amet ea eu. Qui nulla mollit excepteur sint ad sint est.</Typography> */}
            {/* <MailOutline /> */}

            <NothingSelectedView />
        </JournalLayout >
    )
}
