import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { PublicRoute } from '../../src/router/PublicRoute';

describe('Test in <PublicRoute />', () => {
    test('should show children if not logged', () => {


        const contextValue = {
            user: { id: '', name: '' },
            logged: false,
            login: () => { },
            logout: () => { },
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Public Route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )


        // screen.debug();
        expect(screen.getByText('Public Route')).toBeTruthy();
    });
    test('should Navigate if logged', () => {

        const contextValue = {
            user: { id: 'ABC', name: 'Alonzo' },
            logged: true,
            login: () => { },
            logout: () => { },
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Public Route</h1>
                            </PublicRoute>
                        } />

                        <Route path='marvel' element={
                            <h1>Marvel Page</h1>
                        } />

                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // screen.debug();
        expect(screen.getByText('Marvel Page')).toBeTruthy();

    });
});