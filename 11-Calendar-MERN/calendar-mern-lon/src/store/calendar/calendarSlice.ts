import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Calendar } from '../../Calendar';

export interface CalendarState {
    calendar: number
}

const initialState: CalendarState = {
    calendar: 10,
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.calendar += 1
        },
        decrement: (state) => {
            state.calendar -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.calendar += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = calendarSlice.actions
