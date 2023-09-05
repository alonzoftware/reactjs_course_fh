import { useDispatch, useSelector } from "react-redux"
import { RootState, iEvent, onAddNewEvent, onSetActiveEvent } from "../store"

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    //Properties
    const {
        events, activeEvent
    } = useSelector((state: RootState) => state.calendar)
    //Methods
    const setActiveEvent = (calendarEvent: iEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }
    const startSavingEvent = async (calendarEvent: iEvent) => {
        if (calendarEvent._id != "0") {
            //Update Event

        } else {
            //Create Event
            dispatch(onAddNewEvent({ ...calendarEvent, _id: `${new Date().getTime()}` }));
        }
    }

    return {
        //Properties
        events,
        activeEvent,
        //Methods
        setActiveEvent,
        startSavingEvent,

    }
}