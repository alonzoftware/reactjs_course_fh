import { authSlice, login, getState } from '../../../src/store/auth/authSlice';
import { initialState } from '../../fixtures/authFixtures';
describe('Test in authSlice', () => {
    test('should get initialState and named AUTH', () => {
        //console.log(authSlice);
        const state = authSlice.reducer(initialState, getState);
        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState)
    })

});