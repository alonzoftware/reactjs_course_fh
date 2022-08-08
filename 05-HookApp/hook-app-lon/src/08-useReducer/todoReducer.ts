import { iTodo } from "./TodoList";

export interface iActionTodo {
    type: string,
    payload: iTodo
}

export const todoReducer = (initialState: iTodo[], action: iActionTodo) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            // throw new Error('Action.type= ABC no esta implementada');
            return [...initialState, action.payload];
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload.id);
        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }

                }
                return todo
            })


        default:
            return initialState
    }


}