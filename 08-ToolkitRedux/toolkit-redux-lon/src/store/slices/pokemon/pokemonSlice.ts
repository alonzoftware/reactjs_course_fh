import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Pokemon {
    name: string,
    url: string
}

export interface PokemonState {
    page: number,
    pokemons: Pokemon[],
    isLoading: boolean

}
export interface PokemonPayload {
    page: number,
    pokemons: Pokemon[],
}

const initialState: PokemonState = {
    page: 0,
    pokemons: [],
    isLoading: false
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoadingPokemons: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isLoading = true;
        },
        setPokemons: (state, action: PayloadAction<PokemonPayload>) => {
            // state.page += action.payload;
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;

        },
    },
})

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions
