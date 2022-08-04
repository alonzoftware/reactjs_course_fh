import { render, renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/use-fetch-gifs';

describe('Test for hook useFetchGrid()', () => {

    test('Should get initial state', () => {
        //Begin State
        const { result } = renderHook(() => useFetchGifs('Dragon Ball'));
        const { images, isLoading } = result.current;
        console.log(result);

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });
    test('Should get an images array and isLoading false', async () => {

        const { result } = renderHook(() => useFetchGifs('Dragon Ball'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 6000
            }

        );
        const { images, isLoading } = result.current;
        console.log(result);

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });


});