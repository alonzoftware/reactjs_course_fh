import { useCallback, useReducer } from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoItem } from './TodoItem';
import { iTodo, TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState: iTodo[] = [
    {
        id: new Date().getTime(),
        descrip: "Recolectar la piedra del Alma",
        done: false
    },
    {
        id: new Date().getTime() + 100,
        descrip: "Recolectar la piedra del Tiempo",
        done: false
    }
];

export const TodoApp = () => {




    const [todos, dispatch] = useReducer(todoReducer, initialState);



    const onAddTodoHandler = useCallback(
        (descrip: string) => {
            console.log(descrip);
        },
        [],
    )

    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos} />

                </div>
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onAddTodo={onAddTodoHandler} />
                </div>



            </div>




        </>

    )
}
