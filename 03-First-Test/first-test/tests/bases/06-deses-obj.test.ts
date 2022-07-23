
import { usContext } from "../../src/bases/06-deses-obj";



describe('06-deses-obj', () => {
    test('usContext', () => {
        const clave = 1
        const edad = 35
        const usContextTest = {
            nombreClave: clave,
            anios: 35,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        expect(usContextTest).toEqual(usContext({ clave: 1, edad: 35 }))
    })
})