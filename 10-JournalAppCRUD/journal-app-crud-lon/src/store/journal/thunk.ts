import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { AppDispatch, RootState } from "../store";

export const startNewNote = () => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        console.log('startNewNote');
        const { uid } = getState().auth;
        console.log(uid);

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        //Create Firebase node
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        const setDocResp = await setDoc(newDoc, newNote);
        //console.log({ newDoc, setDocResp });
    }

};