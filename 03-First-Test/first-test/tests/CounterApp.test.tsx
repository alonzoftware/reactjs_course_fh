import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { CounterApp } from "../src/CounterApp";


describe('<CounterApp />', () => {
    const initialValue = 15;
    // test('Match with SNAPSHOT', () => {
    //     const { container } = render(<CounterApp value={initialValue} />);
    //     expect(container).toMatchSnapshot();
    // });
    test('Should show 100', () => {
        render(<CounterApp value={100} />);
        // screen.debug();
        expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading', { level: 5 }).innerHTML).toContain("100");

    });
    test('Should add +1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText(initialValue + 1)).toBeTruthy();
        // screen.debug();

    });
    test('Should substract -1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText(initialValue - 1)).toBeTruthy();
        // screen.debug();
    });

    test('RESET Button', () => {
        const { container } = render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        const idLblResult = container.querySelector('#lbl-result');
        expect(idLblResult?.innerHTML).toContain(`${initialValue}`);
        // screen.debug();
    });

});