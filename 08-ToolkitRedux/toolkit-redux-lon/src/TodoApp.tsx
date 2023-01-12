import { useGetTodosQuery } from "./store/rtk_apis";
import { iTodo } from './store/rtk_apis/todosApi';

export const TodoApp = () => {

    const { data: todos = [], isLoading } = useGetTodosQuery(0);
    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'TRUE' : 'FALSE'}</h4>
            <pre>...</pre>
            <ul>
                {todos.map((todo: iTodo) => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'DONE ' : 'PENDING '}</strong>
                        {todo.title}
                    </li>))}


            </ul>



            <button>Next Todo</button>
        </>
    )
}
