import { useState } from "react";
import { useGetTodosQuery,useGetTodoQuery } from "./store/rtk_apis";
import { iTodo } from './store/rtk_apis/todosApi';

export const TodoApp = () => {
    const [todoId, setTodoId] = useState(1);
    // const { data: todos = [], isLoading } = useGetTodosQuery(0);
    const { data: todo, isLoading } = useGetTodoQuery(todoId);


    const nextTodo = () => {
        setTodoId((todoId)=> todoId +1);
    }
    const previousTodo = () => {
        if (todoId > 0){
            setTodoId((todoId)=> todoId -1);
        }
    }
    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'TRUE' : 'FALSE'}</h4>
            <pre>{JSON.stringify(todo)}</pre>
            {/* <ul>
                {todos.map((todo: iTodo) => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'DONE ' : 'PENDING '}</strong>
                        {todo.title}
                    </li>))}


            </ul> */}



            <button onClick={ previousTodo}
            >Prev Todo
            </button>
            <button onClick={ nextTodo}
            >nextTodo
            </button>
        </>
    )
}
