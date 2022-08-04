
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { GifGrid } from "../../src/components/index"
import { useFetchGifs } from '../../src/hooks/use-fetch-gifs';
import { iImg } from '../../src/helpers/get-gifs';
jest.mock('../../src/hooks/use-fetch-gifs');

const mockUseFetchGifs = useFetchGifs as jest.MockedFunction<typeof useFetchGifs>;


describe('Test For <GifGrid />', () => {
    const category = 'One Punch';
    test('Should Show Loading at Bigining', () => {

        mockUseFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando gifs .....'));
        expect(screen.getByText(category));

        // screen.debug();
    });

    test('Should Show 2 items ', () => {
        const gifs: iImg[] = [
            { id: 1, title: 'Saitama', url: `https://localhost/saitama.jpg` },
            { id: 2, title: 'Goku', url: `https://localhost/goku.jpg` },
        ]
        mockUseFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole("img").length).toBe(2);
        screen.debug();
    });

});