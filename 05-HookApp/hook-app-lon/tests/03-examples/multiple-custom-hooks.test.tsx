import { fireEvent, render, screen, configure } from "@testing-library/react";
configure({ asyncUtilTimeout: 400 });
import React from "react";
import { MultipleCustomHooks, iUseFetchData } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";


jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Test <MultipleCustomHooks />', () => {

    const incrementMock = jest.fn();
    const funcMock = jest.fn();
    const useCounterMock = useCounter as jest.MockedFunction<typeof useCounter>;
    useCounterMock.mockReturnValue({
        counter: 1,
        increment: incrementMock,
        decrement: funcMock,
        reset: funcMock,
    });
    //RESET ALL MOCKS BEFORE TEST
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test('should show default component', () => {
        const useFetchMock = useFetch as jest.MockedFunction<typeof useFetch>;
        useFetchMock.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Loading ...'));
        expect(screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        expect(nextButton).toHaveAttribute('disabled');
        // screen.debug();

    });

    test('should show a Quote', () => {
        const useFetchMock = useFetch as jest.MockedFunction<typeof useFetch>;
        useFetchMock.mockReturnValue({
            data: [{ author: 'Alonzo', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null,
        } as iUseFetchData);

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Alonzo')).toBeTruthy();
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        expect(nextButton).not.toHaveAttribute('disabled');

        // screen.debug();
    });

    test('should call increment function', () => {
        const useFetchMock = useFetch as jest.MockedFunction<typeof useFetch>;
        useFetchMock.mockReturnValue({
            data: [{ author: 'Alonzo', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null,
        } as iUseFetchData);


        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        fireEvent.click(nextButton);
        expect(incrementMock).toBeCalled();

    })

});


