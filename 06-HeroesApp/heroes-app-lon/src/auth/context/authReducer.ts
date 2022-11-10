import { types } from "../types/types";

const initialState = {
    logged: false,
}
export interface iActionTodo {
    type: string,
    payload: string
}
export const authReducer = (state = {}, action: iActionTodo) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                name: action.payload,
            };

        case types.logout:
            return {
                ...state,
                logged: false,
            };

        default:
            return state;
    }

}