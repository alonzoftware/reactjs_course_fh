import { authReducer } from '../../../src/auth/context/authReducer';
describe('Test in authReducer', () => {
    test('should show DEFAULT STATE', () => {
        const state = authReducer(
            { logged: false, user: { id: '', name: '' } },
            { type: '', payload: { id: '', name: '' } }
        );

        expect(state).toEqual({ logged: false, user: { id: '', name: '' } });
    });
});