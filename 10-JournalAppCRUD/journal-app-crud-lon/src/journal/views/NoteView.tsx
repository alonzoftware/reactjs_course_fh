import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useForm } from '../../hooks';
import { useEffect, useMemo } from 'react';
import { iNote, setActiveNote, startSaveNote } from '../../store/journal';

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note } = useSelector((state: RootState) => state.journal);

    const { body, title, date, onInputChange, formState } = useForm(note)
    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date])

    useEffect(() => {
        dispatch(setActiveNote(formState as iNote));
    }, [formState])

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    return (
        <Grid
            container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}
            className="animate__animated animate__fadeIn animate_faster"
        >
            <Grid item>
                <Typography fontSize={39} fontWeight='light'> {dateString}</Typography>
            </Grid>
            <Grid item>
                <Button
                    onClick={onSaveNote}
                    color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingress a Title"
                    label="Title"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happened today ?"
                    label="Description"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />

            </Grid>

            <ImageGallery />

        </Grid>
    )
}
