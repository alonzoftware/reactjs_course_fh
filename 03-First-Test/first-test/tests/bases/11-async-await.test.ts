import { getImagen } from "../../src/bases/11-async-await";

describe('11-async-await', () => {
    test('getImage async', async () => {
        const url = await getImagen();
        expect(url).toEqual(expect.any(String));
        expect(typeof (url)).toBe('string');

    });
});