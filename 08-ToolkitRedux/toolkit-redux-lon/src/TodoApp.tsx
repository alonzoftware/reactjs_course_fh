import { useGetTodosQuery } from "./store/rtk_apis";
interface iTodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
export const TodoApp = () => {

    const { data: todos = [], isLoading } = useGetTodosQuery();
    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'TRUE' : 'FALSE'}</h4>
            <pre>...</pre>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'DONE' : 'PENDING'}</strong>
                        {todo.title}
                    </li>))}


            </ul>



            <button>Next Todo</button>
        </>
    )
}
