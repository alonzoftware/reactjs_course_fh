import { iTodo } from "./TodoList";



export const todoReducer = (initialState: iTodo[], action: any) => {
    switch (action.type) {
        case 'ABC':

            throw new Error('Action.type= ABC no esta implementada');

        default:
            return initialState
    }


}