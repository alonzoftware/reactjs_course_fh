import React from 'react'
import { render, screen } from "@testing-library/react";
import { iUser, UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';




describe('Test in <HomePage />', () => {
    const userIni: iUser = {
        email: "",
        id: 0,
        name: "",
    }
    const user: iUser = {
        email: "test@test.com",
        id: 1,
        name: "nametest",
    }
    test('should show initial component with initial user', () => {
        render(
            <UserContext.Provider value={{ user: userIni, setUser: () => { } }}>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        // console.log(preTag.innerHTML);
        // expect(preTag.innerHTML).toBe('null');
        expect(preTag.innerHTML).toContain(userIni.name);
        expect(preTag.innerHTML).toContain(userIni.id.toString());
        expect(preTag.innerHTML).toContain(`${userIni.id}`);

    });
    test('should show initial component with user', () => {
        render(
            <UserContext.Provider value={{ user, setUser: () => { } }}>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        // console.log(preTag.innerHTML);
        // expect(preTag.innerHTML).toBe('null');
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());
        expect(preTag.innerHTML).toContain(`${user.id}`);

    });

});