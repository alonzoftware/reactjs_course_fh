
interface iProps {
    id: number
    descrip: string,
    done: boolean,
    onDelItem: Function
    onToggleItem: Function
}
export const TodoItem = ({ id, descrip, done, onDelItem, onToggleItem }: iProps) => {

    return (
        <li className='list-group-item d-flex justify-content-between'>

            <span aria-label="span" className={`align-self-center ${done ? 'text-decoration-line-through' : ''}`}
                onClick={() => onToggleItem(id)}
            >{descrip}</span>
            <button className='btn btn-danger'
                onClick={() => onDelItem(id)}
            >Borrar</button>

        </li>
    )
}
