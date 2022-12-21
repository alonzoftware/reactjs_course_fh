import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { PublicRoute } from '../../src/router/PublicRoute';
import { AppRouter } from '../../src/router/AppRouter';
describe('Test <AppRouter />', () => {
    test('should show Login if is not logged', () => {

        const contextValue = {
            user: { id: '', name: '' },
            logged: false,
            login: () => { },
            logout: () => { },
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        //screen.debug();
        expect(screen.getAllByText('Login').length).toBe(2);
    })
    test('should show Marvel if is logged', () => {

        const contextValue = {
            user: { id: 'ABC', name: 'Alonzo' },
            logged: true,
            login: () => { },
            logout: () => { },
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        //screen.debug();
        expect(screen.getByText('Marvel Page')).toBeTruthy();
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
    })
});