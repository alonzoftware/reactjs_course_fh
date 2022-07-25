import { getHeroeByIdAsync } from "../../src/bases/09-promises";

describe('09-promises', () => {

    test('getHeroeByIdAsync should response with a HERO', (done = () => { }) => {
        getHeroeByIdAsync(1).then((hero) => {
            expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
            done();
        });

    });
    test('getHeroeByIdAsync should response with a error', (done = () => { }) => {
        const id = 100;
        getHeroeByIdAsync(id).catch((error) => {
            expect(error).toEqual('No se pudo encontrar el héroe' + id);
            done();
        });

    });
})