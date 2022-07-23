
import { getUser, getUsuarioActivo } from "../../src/bases/05-functions"



describe('05-functions', () => {
    test('getUser', () => {
        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        expect(user).toEqual(getUser());


    })
    test('getUsuarioActivo', () => {

        const name = "Boris"
        const user = {
            uid: 'ABC567',
            username: name
        }

        expect(user).toEqual(getUsuarioActivo(name));


    })


})

