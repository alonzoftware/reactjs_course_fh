import { useCallback } from "react"
import { TodoItem } from "./TodoItem"

export interface iTodo {
    id: number,
    descrip: string,
    done: boolean
}

export const TodoList = ({ todos }: { todos: iTodo[] }) => {

    const onDelItemHandler = useCallback(
        (id: number) => {
            console.log('Delete Item' + id)
        },
        [],
    )
    return (
        <ul className='list-group'>
            {
                todos.map((todo: iTodo) => (
                    <TodoItem key={todo.id} {...todo} onDelItem={onDelItemHandler} />
                )
                )

            }

        </ul>
    )
}
