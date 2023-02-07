import { createSlice, ThunkAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface JournalState {
    isSaving: boolean,
    messageSaved: string,
    notes: [],
    active: {
        id: string,
        title: string,
        body: string,
        date: number,
        imageUrls: Array<string>
    },

}

const initialState: JournalState = {
    isSaving: true,
    messageSaved: '',
    notes: [],
    active: {
        id: '',
        title: '',
        body: '',
        date: 0,
        imageUrls: [],
    },
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        addNewEmptyNote: (state, action: PayloadAction<number>) => {
            // state.journal += action.payload
        },
        setActiveNote: (state, action: PayloadAction<number>) => {
            // state.journal += action.payload
        },
        setNotes: (state, action: PayloadAction<number>) => {
            // state.journal += action.payload
        },
        setSaving: (state) => {
            // state.journal += action.payload
        },
        updateNote: (state, action: PayloadAction<number>) => {
            // state.journal += action.payload
        },
        deleteNoteById: (state, action: PayloadAction<number>) => {
            // state.journal += action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions
