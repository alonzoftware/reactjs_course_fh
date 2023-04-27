import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { AppDispatch, RootState } from "../store";
import { addNewEmptyNote, setActiveNote, setSaving } from './journalSlice';

export const startNewNote = () => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {

        dispatch(setSaving(true));
        console.log('startNewNote');
        const { uid } = getState().auth;
        const newNote = {
            id: '',
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
        }

        //Create Firebase node
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        const setDocResp = await setDoc(newDoc, newNote);
        //console.log({ newDoc, setDocResp });

        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
        dispatch(setSaving(false));
    }

};