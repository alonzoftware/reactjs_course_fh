
interface iProps {
    id: number
    descrip: string,
    done: boolean,
    onDelItem: Function
}
export const TodoItem = ({ id, descrip, done, onDelItem }: iProps) => {

    return (
        <li className='list-group-item d-flex justify-content-between'>

            <span className='align-self-center'>descrip</span>
            <button className='btn btn-danger'
                onClick={() => onDelItem(id)}
            >Borrar</button>

        </li>
    )
}
