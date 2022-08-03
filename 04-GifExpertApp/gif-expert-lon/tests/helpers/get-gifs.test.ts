import { getGifs } from '../../src/helpers/get-gifs';
describe('Test for function getGifs()', () => {
    test('Should Return Array with at least an element', async () => {
        const gifsArray = await getGifs('One Punch');
        expect(gifsArray.length).toBeGreaterThan(0);
    });
    test('Should Return elements with an specific format', async () => {
        const gifsArray = await getGifs('One Punch');
        expect(gifsArray[0]).toEqual(
            {
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
            }
        );
    });
});