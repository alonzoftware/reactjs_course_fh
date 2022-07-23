import { retornaArreglo } from "../../src/bases/07-deses-array";
describe('07-deses-array', () => {
    test('retornaArreglo', () => {
        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof (letters)).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letters).toEqual(expect.any(String));

    })

})