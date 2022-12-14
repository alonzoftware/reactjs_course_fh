import { types } from "../../../src/auth/types/types";

describe('Test in ACTION TYPES - types.ts', () => {
    test('should show these types', () => {

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        }
        );

    });
});