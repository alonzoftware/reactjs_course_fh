import React from 'react'
import { fireEvent, render, screen } from "@testing-library/react";
import { iUser, UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';


describe('Test in <LoginPage />', () => {
    const userIni: iUser = {
        email: "",
        id: 0,
        name: "",
    }
    test('should show initial component with initial user', () => {
        render(
            <UserContext.Provider value={{ user: userIni, setUser: () => { } }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        // console.log(preTag.innerHTML);
        // expect(preTag.innerHTML).toBe('null');
        expect(preTag.innerHTML).toContain(userIni.name);
        expect(preTag.innerHTML).toContain(userIni.id.toString());
        expect(preTag.innerHTML).toContain(`${userIni.id}`);

    });
    test('should call setUser', () => {
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{ user: userIni, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const buttonElement = screen.getByRole('button');
        //console.log(spanElement.className);
        fireEvent.click(buttonElement);
        expect(setUserMock).toHaveBeenCalledWith({ id: 123, name: "Alonzo Choque", email: "alonzo@t.com", });
    });
});