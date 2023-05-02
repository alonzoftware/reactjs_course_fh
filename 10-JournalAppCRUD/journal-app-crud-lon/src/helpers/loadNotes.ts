import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";
import { iNote } from "../store/journal";

export const loadNotes = async (uid = '') => {
    if (uid == "") throw new Error(`The uid doesn't exist`);
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);
    const notes: iNote[] = [];
    docs.forEach(doc => {
        // notes.push({id:doc.id, ...doc.data()});
        notes.push(
            {
                id: doc.id,
                title: doc.data().title,
                body: doc.data().body,
                date: doc.data().date,
                imageUrls: doc.data().imageUrls,
            }

        )
    });
    return notes;

}