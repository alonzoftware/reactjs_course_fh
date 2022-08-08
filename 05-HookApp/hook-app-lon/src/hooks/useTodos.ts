import { useCallback, useEffect, useReducer } from "react";
import { iTodo } from "../08-useReducer/TodoList";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState: iTodo[] = [
    // {
    //     id: new Date().getTime(),
    //     descrip: "Recolectar la piedra del Alma",
    //     done: false
    // },
    // {
    //     id: new Date().getTime() + 100,
    //     descrip: "Recolectar la piedra del Tiempo",
    //     done: false
    // }
];
const init = () => {

    if (localStorage.getItem('todos')) {
        const todosStr = localStorage.getItem('todos')!;
        return JSON.parse(todosStr);
    } else {
        return [];
    }
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])


    const onAddTodoHandler = useCallback(
        (todo: iTodo) => {
            // console.log({ todo });
            const action = {
                type: '[TODO] Add Todo',
                payload: todo
            }
            dispatch(action);
        },
        [],
    )
    const onDelItemHandler = useCallback(
        (id: number) => {
            // console.log('Delete Item ' + id)
            const action = {
                type: '[TODO] Remove Todo',
                payload: { id, done: false, descrip: "" }
            }
            dispatch(action);
        },
        [],
    )
    const onToggleItemHandler = useCallback(
        (id: number) => {
            // console.log('Delete Item ' + id)
            const action = {
                type: '[TODO] Toggle Todo',
                payload: { id, done: false, descrip: "" }
            }
            dispatch(action);
        },
        [],
    )



    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        onAddTodoHandler,
        onDelItemHandler,
        onToggleItemHandler,
    }
}
