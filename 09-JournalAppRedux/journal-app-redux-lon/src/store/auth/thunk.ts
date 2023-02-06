import { AppDispatch, RootState } from "../../store";
import { checkingCredentials, login, logout } from "./authSlice";
import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from '../../firebase/providers';

export const checkingAuthentication = (email = '', pass = '') => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch(checkingCredentials());

        // TODO: http request
        // USING FETCH
        //--------------
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();
        // console.log(data);

        // USING AXIOS
        //--------------
        // const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
        // console.log(data);

        // dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));


        // dispatch(setPokemons());
    }

};
export const startGoogleSignIn = () => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if (!result.ok) {
            dispatch(logout({ errorMessage: result.errorMessage }));
        } else {
            //delete result.ok;
            dispatch(login(
                {
                    uid: result.uid!,
                    email: result.email!,
                    displayName: result.displayName!,
                    photoURL: result.photoURL!,
                }
            ));
        }
    }

}

export const startCreatingUserWithEmailPassword = ({ email = '', pass = '', displayName = '' }) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch(checkingCredentials());
        const result = await registerUserWithEmailPassword({ email, pass, displayName });
        console.log(result.errorMessage);
        if (!result.ok) {
            dispatch(logout({ errorMessage: result.errorMessage }));
        } else {
            dispatch(login(
                {
                    uid: result.uid!,
                    email: result.email!,
                    displayName: result.displayName!,
                    photoURL: result.photoURL ?? '',
                }
            ));
        }


    }

}



export const startLoginWithEmailPassword = ({ email = '', pass = '' }) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch(checkingCredentials());
        const result = await loginWithEmailPassword({ email, pass });
        if (!result.ok) {
            dispatch(logout({ errorMessage: result.errorMessage }));
        } else {
            //delete result.ok;
            dispatch(login(
                {
                    uid: result.uid!,
                    email: result.email!,
                    displayName: result.displayName!,
                    photoURL: result.photoURL!,
                }
            ));
        }
    }

}