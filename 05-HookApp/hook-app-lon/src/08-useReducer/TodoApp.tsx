import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';



export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, onDelItemHandler, onToggleItemHandler, onAddTodoHandler } = useTodos();

    return (
        <>
            <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos}
                        onDelItem={onDelItemHandler}
                        onToggleItem={onToggleItemHandler}
                    />

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
