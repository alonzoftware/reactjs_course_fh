
import { useEffect } from "react"

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "./store";
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {

    const { page, pokemons, isLoading } = useSelector((state: RootState) => state.pokemons);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemons());
    }, []);



    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: {isLoading ? 'True' : 'False'}</span>

            <ul>
                {pokemons.map((pokemon) => {
                    return <li key={pokemon.name}>{pokemon.name}</li>
                })}
            </ul>
            <button
                disabled={isLoading}
                onClick={() => { dispatch(getPokemons(page + 1)); }}
            >
                Next Pokemon
            </button>
        </>
    )
}
