import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { PrivateRoute } from '../../src/router/PrivateRoute';
describe('Test in <PrivateRoute />', () => {
    test('should show Children if is login', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            user: { id: 'ABC', name: 'Alonzo' },
            logged: true,
            login: () => { },
            logout: () => { },
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>

                    <PrivateRoute>
                        <h1>Private Route</h1>
                    </PrivateRoute>

                </MemoryRouter>
            </AuthContext.Provider>
        )


        // screen.debug();
        expect(screen.getByText('Private Route')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');

    });


});

