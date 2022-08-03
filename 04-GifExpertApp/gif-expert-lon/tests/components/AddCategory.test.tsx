import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { AddCategory } from "../../src/components/index"

describe('Test for <AddCategory />', () => {

    test('Should Change Textbox value', () => {
        render(<AddCategory onNewCategory={() => { }} />);
        const inputBox = screen.getByRole("textbox");
        fireEvent.input(inputBox, { target: { value: 'Saitama' } });
        expect(inputBox.getAttribute("value")).toBe("Saitama");
        // screen.debug();
    });

    test('Should call onNewCategory() if input has value', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();


        render(<AddCategory onNewCategory={onNewCategory} />);
        const inputBox = screen.getByRole("textbox");
        const formTest = screen.getByRole("form", { name: "formMain" });
        fireEvent.input(inputBox, { target: { value: 'Saitama' } });
        fireEvent.submit(formTest);
        expect(inputBox.getAttribute("value")).toBe("");
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

        // screen.debug();

    });
    test('Not Should call onNewCategory() if input is Empty', () => {
        const inputValue = '';
        const onNewCategory = jest.fn();


        render(<AddCategory onNewCategory={onNewCategory} />);
        const inputBox = screen.getByRole("textbox");
        const formTest = screen.getByRole("form", { name: "formMain" });
        fireEvent.input(inputBox, { target: { value: inputValue } });
        fireEvent.submit(formTest);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();


        screen.debug();

    });

});