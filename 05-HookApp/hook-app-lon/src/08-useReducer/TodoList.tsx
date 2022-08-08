import { useCallback } from "react"
import { TodoItem } from "./TodoItem"

export interface iTodo {
    id: number,
    descrip: string,
    done: boolean
}

export const TodoList = ({ todos, onDelItem, onToggleItem }: { todos: iTodo[], onDelItem: Function, onToggleItem: Function }) => {


    return (
        <ul className='list-group'>
            {
                todos.map((todo: iTodo) => (
                    <TodoItem key={todo.id} {...todo}
                        onDelItem={onDelItem}
                        onToggleItem={onToggleItem}
                    />
                )
                )

            }

        </ul>
    )
}
