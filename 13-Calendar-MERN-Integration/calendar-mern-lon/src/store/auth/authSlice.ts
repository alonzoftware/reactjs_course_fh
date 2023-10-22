import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    status: String,
    user: {},
    errorMessage: String,
}

const initialState: AuthState = {
    status: 'checking',//'authenticated','not-authenticated'
    user: {},
    errorMessage: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = '';
        },

        onLogin: (state, action: PayloadAction<number>) => {
            state.status = 'authenticated';
            state.user = {};
            state.errorMessage = '';
        },

        // increment: (state) => {
        //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //     // doesn't actually mutate the state because it uses the Immer library,
        //     // which detects changes to a "draft state" and produces a brand new
        //     // immutable state based off those changes
        //     state.auth += 1
        // },

        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.auth += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { onChecking, onLogin } = authSlice.actions
