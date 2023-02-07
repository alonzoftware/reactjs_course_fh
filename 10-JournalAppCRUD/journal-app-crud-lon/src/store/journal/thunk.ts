import { AppDispatch, RootState } from "../store";

export const checkingAuthentication = () => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        // dispatch(checkingCredentials());

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