import { AppDispatch, RootState } from "../../types";
import { startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch(startLoadingPokemons());

        // TODO: http request

        // dispatch(setPokemons());
    }

}