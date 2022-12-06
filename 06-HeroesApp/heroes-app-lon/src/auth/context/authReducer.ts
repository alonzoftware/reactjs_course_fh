import { types, iTypes } from '../types/types';

const initialState = {
    logged: false,
}
export interface iActionAuth {
    type: string,
    payload: { id: string, name: string }
}
export const authReducer = (state = {}, action: iActionAuth) => {
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