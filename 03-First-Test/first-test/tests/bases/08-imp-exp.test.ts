import { getHeroeById, getHeroesByOwner } from "../../src/bases/08-imp-exp";
describe('08-imp-exp', () => {
    test('getHeroeById', () => {
        const heroTest = { id: 1, name: 'Batman', owner: 'DC' };

        expect(heroTest).toEqual(getHeroeById(1));
    })
    test('getHeroeById not Exist', () => {
        expect(undefined).toEqual(getHeroeById(100));
        expect(getHeroeById(100)).toBeFalsy();
    })
    test('getHeroesByOwner', () => {
        const heroTestArray = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ];

        expect(getHeroesByOwner('DC').length).toBe(3);
        expect(heroTestArray).toEqual(getHeroesByOwner('DC'));
    })

})