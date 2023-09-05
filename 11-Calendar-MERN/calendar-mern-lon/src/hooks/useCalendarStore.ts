import { useDispatch, useSelector } from "react-redux"
import { RootState, iEvent, onAddNewEvent, onSetActiveEvent, onUpdateEvent, onDeleteEvent } from "../store"

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
            dispatch(onUpdateEvent({ ...calendarEvent }));
        } else {
            //Create Event
            dispatch(onAddNewEvent({ ...calendarEvent, _id: `${new Date().getTime()}` }));
        }
    }

    const deleteEvent = () => {
        dispatch(onDeleteEvent());
    }

    return {
        //Properties
        events,
        activeEvent,
        //Methods
        setActiveEvent,
        startSavingEvent,
        deleteEvent,

    }
}