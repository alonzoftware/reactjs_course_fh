
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AppRouter } from '../../src/router/AppRouter';
describe('Test <AppRouter />', () => {
    test('should show Login if path is /auth/*', () => {


        render(
            <MemoryRouter initialEntries={['/auth/o']}>
                <AppRouter />

            </MemoryRouter>
        )

        //screen.debug();
        expect(screen.getAllByText('LoginPage').length).toBeGreaterThanOrEqual(1);
    })
    test('should show JournalApp if path is /*', () => {


        render(
            <MemoryRouter initialEntries={['/']}>
                <AppRouter />

            </MemoryRouter>
        )

        screen.debug();
        expect(screen.getAllByText('JournalPage').length).toBeGreaterThanOrEqual(1);
    })

});