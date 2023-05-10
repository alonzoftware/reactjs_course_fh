import { SaveOutlined, UploadOutlined } from '@mui/icons-material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'
import { Button, Grid, TextField, Typography, IconButton } from '@mui/material';
import { ImageGallery } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useForm } from '../../hooks';
import { useEffect, useMemo, useRef } from 'react';
import { iNote, setActiveNote, startSaveNote, startUploadingFiles } from '../../store/journal';

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, isSaving, messageSaved } = useSelector((state: RootState) => state.journal);

    const { body, title, date, onInputChange, formState } = useForm(note)
    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date])


    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        dispatch(setActiveNote(formState as iNote));
    }, [formState])

    useEffect(() => {
        if (messageSaved != '') {
            Swal.fire('Updateded Note', messageSaved, 'success');
        }
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }
    const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const { files } = target;
        if (files !== null) {
            dispatch(startUploadingFiles(files));
        }



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

                <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    style={{ display: 'none' }}
                />
                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => {
                        fileInputRef.current?.click();
                    }}
                >
                    <UploadOutlined />
                </IconButton>
                <Button
                    disabled={isSaving}
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
