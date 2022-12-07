import { types, iTypes } from '../types/types';

export interface iAuthState {
    logged: boolean
    user: { id: string, name: string }
}
export interface iAuthAction {
    type: string,
    payload: { id: string, name: string }
}
export const authReducer = (state: iAuthState, action: iAuthAction) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload,
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