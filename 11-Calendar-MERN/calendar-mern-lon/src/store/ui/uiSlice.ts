import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface uiState {
    isDateModalOpen: boolean
}

const initialState: uiState = {
    isDateModalOpen: false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {

        onOpenDateModal: (state) => {
            state.isDateModalOpen = true;
        },
        onCloseDateModal: (state) => {
            state.isDateModalOpen = false;
        },
        // decrement: (state) => {
        //     state.ui -= 1
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.ui += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { onOpenDateModal } = uiSlice.actions
