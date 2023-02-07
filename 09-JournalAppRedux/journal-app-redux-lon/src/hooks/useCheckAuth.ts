import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { RootState } from "../store";
import { login, logout } from "../store/auth";

export const useCheckAuth = () => {
    const { status } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout({ errorMessage: '' }));
            dispatch(login(
                {
                    uid: user.uid!,
                    email: user.email!,
                    displayName: user.displayName!,
                    photoURL: user.photoURL ?? '',
                }
            ));
        })
    }, []);
    return status
}
