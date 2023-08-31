import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    //Properties
    const {
        events, activeEvent
    } = useSelector((state: RootState) => state.calendar)
    //Methods


    return {
        //Properties
        events,
        activeEvent
        //Methods

    }
}