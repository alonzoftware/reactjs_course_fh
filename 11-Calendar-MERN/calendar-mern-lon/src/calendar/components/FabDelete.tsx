import { addHours } from "date-fns";
import { useCalendarStore } from "../../hooks"

export const FabDelete = () => {

    const { startDeletingEvent, activeEvent } = useCalendarStore();
    const handleDelete = () => {
        startDeletingEvent();
    }
    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={handleDelete}
            style={{ display: (activeEvent._id != '' && activeEvent._id != '0') ? '' : 'none' }}
        >
            <i className="fas fa-trash-alt"> </i>
        </button>
    )
}
