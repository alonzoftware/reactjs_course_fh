import { AppDispatch, RootState } from "../store";

export const startNewNote = () => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        console.log('startNewNote');
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

        // uid
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
    }

};