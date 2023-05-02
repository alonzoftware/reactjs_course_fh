import { createSlice, ThunkAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface iNote {
    id: string,
    title: string,
    body: string,
    date: number,
    imageUrls: Array<string>
}

export interface JournalState {
    isSaving: boolean,
    messageSaved: string,
    notes: iNote[],
    active: iNote,

}

const initialState: JournalState = {
    isSaving: false,
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
        addNewEmptyNote: (state, action: PayloadAction<iNote>) => {
            // state.journal += action.payload
            state.notes.push(action.payload);
        },
        setActiveNote: (state, action: PayloadAction<iNote>) => {
            state.active = action.payload
        },
        setNotes: (state, action: PayloadAction<iNote[]>) => {
            state.notes = action.payload
        },
        setSaving: (state, action: PayloadAction<boolean>) => {
            state.isSaving = action.payload;
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
