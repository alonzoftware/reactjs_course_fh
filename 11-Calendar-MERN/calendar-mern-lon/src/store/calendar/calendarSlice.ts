import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Calendar } from '../../Calendar';
import { addHours } from 'date-fns';
export interface iEvent {
    _id: string
    title: string
    notes: string
    start: Date,
    end: Date,
    bgColor: string,
    user: {
        _id: string,
        name: string,
    }
}

export interface CalendarState {
    events: iEvent[],
    activeEvent: iEvent,
}
const nullEvent: iEvent = {
    _id: '',
    title: '',
    notes: '',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: '',
        name: '',
    }

}

const tempId = new Date().getTime();

const initialState: CalendarState = {
    events: [{
        _id: `${tempId}`,
        title: 'Boss Birthday',
        notes: 'Must Buy a Cake',
        start: new Date(),
        end: addHours(new Date(), 2),
        bgColor: '#fafafa',
        user: {
            _id: '123',
            name: 'Alonzo',
        }

    }],
    activeEvent: nullEvent,
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        // increment: (state) => {
        //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //     // doesn't actually mutate the state because it uses the Immer library,
        //     // which detects changes to a "draft state" and produces a brand new
        //     // immutable state based off those changes
        //     state.calendar += 1
        // },
        // decrement: (state) => {
        //     state.calendar -= 1
        // },
        onSetActiveEvent: (state, action: PayloadAction<iEvent>) => {
            state.activeEvent = action.payload
        },
        onAddNewEvent: (state, action: PayloadAction<iEvent>) => {
            state.events.push(action.payload);
            state.activeEvent = nullEvent
        },
    },
})

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent } = calendarSlice.actions
