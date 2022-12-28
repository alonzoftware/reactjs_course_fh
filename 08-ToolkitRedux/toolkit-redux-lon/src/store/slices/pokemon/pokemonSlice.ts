import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PokemonState {
    page: number,
    pokemons: string[],
    isLoading: boolean

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
        setPokemons: (state, action: PayloadAction<number>) => {
            // state.page += action.payload;
            console.log(action);
        },
    },
})

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions
