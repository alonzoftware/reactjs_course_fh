
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { GifGrid } from "../../src/components/index"
import { iImg } from "../../src/helpers/get-gifs";
import { useFetchGifs } from '../../src/hooks/use-fetch-gifs';
jest.mock('../../src/hooks/use-fetch-gifs');

const mockUseFetchGifs = useFetchGifs as jest.MockedFunction<typeof useFetchGifs>;


describe('Test For <GifGrid />', () => {
    const category = 'One Punch';
    test('Should Show Loading at Bigining', () => {

        mockUseFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        // useFetchGifs.mockReturnValue({
        //     Images: [],
        //     isLoading: true,
        // })

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando gifs .....'));
        expect(screen.getByText(category));

        screen.debug();
    });

});