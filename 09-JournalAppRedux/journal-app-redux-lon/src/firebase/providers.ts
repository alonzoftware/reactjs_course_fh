import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //console.log(result.user);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        //console.log({credentials});
        const { displayName = '', email = '', photoURL = '', uid = '' } = result.user;
        return {
            ok: true,
            //User info
            displayName,
            email,
            photoURL,
            uid,
        }

    } catch (error: any) {

        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        return {
            ok: false,
            errorMessage,

        }
    }
}

export const registerUserWithEmailPassword = async ({ email = '', pass = '', displayName = '' }) => {
    try {

        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, pass);
        const { uid, photoURL } = result.user;
        await updateProfile(FirebaseAuth.currentUser!, { displayName });
        return {
            ok: true,
            //User info
            displayName,
            email,
            photoURL,
            uid,
        }


    } catch (error: any) {

        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        return {
            ok: false,
            errorMessage,

        }
    }


}
export const loginWithEmailPassword = async ({ email = '', pass = '' }) => {
    try {

        const result = await signInWithEmailAndPassword(FirebaseAuth, email, pass);
        const { uid, photoURL, displayName } = result.user;
        return {
            ok: true,
            //User info
            displayName,
            email,
            photoURL,
            uid,
        }


    } catch (error: any) {

        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        return {
            ok: false,
            errorMessage,

        }
    }


}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}