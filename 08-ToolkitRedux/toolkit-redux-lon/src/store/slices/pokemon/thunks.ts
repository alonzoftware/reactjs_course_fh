
import { AppDispatch, RootState } from "../../store";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"
import { pokemonApi } from '../../../api/pokemonApi';

export const getPokemons = (page = 0) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch(startLoadingPokemons());

        // TODO: http request
        // USING FETCH
        //--------------
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();
        // console.log(data);

        // USING AXIOS
        //--------------
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
        console.log(data);

        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));


        // dispatch(setPokemons());
    }

}