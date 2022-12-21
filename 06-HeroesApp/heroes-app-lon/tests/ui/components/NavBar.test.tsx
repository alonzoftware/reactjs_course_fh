import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter,useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));


describe('Tests in <NavBar />', () => {
    const userName = 'Alonzo';

    const contextValue = {
        user: { id: 'ABC', name: userName },
        logged: true,
        login: () => { },
        logout: jest.fn(),
    }

    beforeEach(() => jest.clearAllMocks());
    test('should Show name of user in NavBar', () => {


        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        //screen.debug();
        expect(screen.getByText(userName)).toBeTruthy();
        // expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);


    });
    test('should call LOGOUT function', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
    });


});