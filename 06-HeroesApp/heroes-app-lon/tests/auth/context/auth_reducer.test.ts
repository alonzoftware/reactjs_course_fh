import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';
describe('Test in authReducer', () => {
    test('should show DEFAULT STATE', () => {
        const state = authReducer(
            { logged: false, user: { id: '', name: '' } },
            { type: '', payload: { id: '', name: '' } }
        );

        expect(state).toEqual({ logged: false, user: { id: '', name: '' } });
    });

    test('should show LOGIN STATE', () => {

        const user = { id: 'ABC', name: 'Alonzo' };
        const state = authReducer(
            { logged: true, user: user },
            { type: types.login, payload: user }
        );

        expect(state).toEqual({ logged: true, user: user });
    });

    test('should show LOGOUT STATE', () => {
        const user = { id: 'ABC', name: 'Alonzo' };
        const state = authReducer(
            { logged: false, user: user },
            { type: types.logout, payload: user }
        );

        expect(state).toEqual({ logged: false, user: { id: '', name: '' } });
    });
});