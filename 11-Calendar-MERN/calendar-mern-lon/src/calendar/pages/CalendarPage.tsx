import { Calendar } from "react-big-calendar"
import { addHours } from 'date-fns'
import { localizer, getMessagesES } from "../../helpers"

import { CalendarEventBox, Navbar } from ".."
interface iEvent {
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

const events: iEvent[] = [{
    title: 'Boss Birthday',
    notes: 'Must Buy a Cake',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Alonzo',
    }

}]


export const CalendarPage = () => {
    const eventStyleGetter = (event: iEvent, start: Date, end: Date, isSelected: boolean) => {
        //console.log(event, start, end, isSelected);
        const style = {
            backgroundColor: '#347cf7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white',

        }
        // const style2 = {
        //     backgroundColor: 'red',
        //     borderRadius: '0px',
        //     opacity: 0.8,
        //     color: 'white',

        // }
        return {
            style: style,
        }

    }
    return (
        <>
            <Navbar></Navbar>
            <Calendar
                culture="es"
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={{ event: CalendarEventBox }}
            />

        </>
    )
}
