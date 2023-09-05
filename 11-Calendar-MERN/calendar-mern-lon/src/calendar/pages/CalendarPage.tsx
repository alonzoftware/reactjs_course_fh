import { Calendar } from "react-big-calendar";
import { localizer, getMessagesES } from "../../helpers";

import { CalendarEventBox, CalendarModal, FabAddNew, Navbar } from "..";
import { useState } from "react";
import { useUiStore, useCalendarStore } from "../../hooks";
import { addHours } from 'date-fns';
import { iEvent } from "../../store";
// interface iEvent {
//     title: string
//     notes: string
//     start: Date,
//     end: Date,
//     bgColor: string,
//     user: {
//         _id: string,
//         name: string,
//     }
// }

// const events: iEvent[] = [{
//     title: 'Boss Birthday',
//     notes: 'Must Buy a Cake',
//     start: new Date(),
//     end: addHours(new Date(), 2),
//     bgColor: '#fafafa',
//     user: {
//         _id: '123',
//         name: 'Alonzo',
//     }

// }]


export const CalendarPage = () => {
    const { openDateModal } = useUiStore();
    const { events, setActiveEvent } = useCalendarStore();
    const [lastView, setLastView]: [lastView: any, setLastView: Function] = useState(localStorage.getItem('lastView') || 'month');


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

    const onDoubleClick = (event: any) => {
        // console.log({ doubleClick: event });
        openDateModal();
    }
    const onSelect = (event: any) => {
        console.log({ click: event });
        setActiveEvent(event);
    }
    const onViewChange = (event: any) => {
        // console.log({ viewChanged: event });
        localStorage.setItem('lastView', event);
    }


    return (
        <>
            <Navbar />
            <Calendar
                culture="es"
                localizer={localizer}
                events={events}
                defaultView={lastView}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={{ event: CalendarEventBox }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChange}
            />

            <CalendarModal />
            <FabAddNew />
        </>
    )
}
