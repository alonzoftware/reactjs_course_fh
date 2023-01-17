import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface authState {
    status: string,
    uid: any,
    email : any,
    displayName: any,
    photoURL: any,
    errorMessage: any,

}

const initialState: authState = {
    status: 'checking', //'not-authenticated', 'authenticated'
    uid: null,
    email : null,
    displayName: null,
    photoURL: null,
    errorMessage: null,

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        
        login: (state, action: PayloadAction<number>) => {
            // state.auth += action.payload
        },
        logout: (state, action: PayloadAction<number>) => {
            // state.auth += action.payload
        },
        checkingCredentials: (state) =>{

        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions
