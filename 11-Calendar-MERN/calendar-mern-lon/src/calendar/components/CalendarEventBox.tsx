



export const CalendarEventBox = ({ event }: { event: any }) => {
    const { title, user } = event;

    return (
        <>
            <strong>{title}</strong>
            <span> - {user.name}</span>
        </>
    )
}
