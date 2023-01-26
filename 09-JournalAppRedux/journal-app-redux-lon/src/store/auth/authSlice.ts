import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface authState {
    status: string,
    uid: string,
    email : string,
    displayName: string,
    photoURL: string,
    errorMessage: string,

}

const initialState: authState = {
    status: 'not-authenticated', //'checking','not-authenticated', 'authenticated'
    uid: '',
    email : '',
    displayName: '',
    photoURL: '',
    errorMessage: '',

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        
        login: (state, action: PayloadAction<{uid : string, email : string , displayName : string, photoURL : string}>) => {
            state.status= 'authenticated';
            state.uid= action.payload.uid;
            state.email = action.payload.email ;
            state.displayName= action.payload.displayName;
            state.photoURL= action.payload.photoURL;
            state.errorMessage= '';
        },
        logout: (state, action: PayloadAction<{errorMessage : string }>) => {
            state.status= 'not-authenticated';
            state.uid= '';
            state.email = '';
            state.displayName= '';
            state.photoURL= '';
            state.errorMessage= action.payload.errorMessage;
        },
        checkingCredentials: (state) =>{
            state.status = 'checking';
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions
