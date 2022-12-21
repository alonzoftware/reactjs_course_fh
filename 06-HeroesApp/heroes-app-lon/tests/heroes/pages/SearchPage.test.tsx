import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { SearchPage } from '../../../src/heroes/pages/SearchPage';
import { MemoryRouter, useNavigate } from 'react-router-dom';



// jest.mock('react-router', () => ({
//     ...jest.requireActual("react-router") as {},
//        useLocation: jest.fn().mockImplementation(() => {
//         return { pathname: "/testroute" };
//        })
//     }));


// const mockedUseLocation = jest.fn();

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom') as {},
//     useLocation: jest.fn().mockImplementation(() => {
//         return { pathname: '/search', search: '?q=Batman' };
//     })
// }));
const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as {},
    useNavigate: () => mockedUseNavigate,
}));


describe('Test in <SearchPage/>', () => {
    test('should show with default values', () => {


        const { container } = render(

            <MemoryRouter>
                <SearchPage />

            </MemoryRouter>

        );
        expect(container).toMatchSnapshot();
    });
    test('should show Batman and the input with the queryParameter', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );
        const input = screen.getByRole('textbox');
        expect(input).toHaveValue('batman');

        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', '/src/assets/heroes/dc-batman.jpg');

        const alert = screen.getByLabelText('alert-danger');
        expect(alert).toHaveAttribute('style', 'display: none;');
    });

    test('do not should show Batman and the input with the queryParameter', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('alert-danger');
        expect(alert).not.toHaveAttribute('style', 'display: none;');
    });

    test('should call Navigate in a new SCREEN', () => {
        const inputValue = 'superman';
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { name: 'searchText', value: inputValue } });

        const form = screen.getByLabelText('form');
        fireEvent.submit(form);

        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);

    });





})