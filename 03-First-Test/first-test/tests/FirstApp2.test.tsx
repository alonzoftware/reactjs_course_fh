import { render, screen } from "@testing-library/react";
import React from "react";
import { FirstApp } from "../src/FirstApp";

const title = "Hola Soy tofu"
const subtitle = 8


describe('<FirstApp2 />', () => {
    test('Match with SNAPSHOT', () => {
        const { container } = render(<FirstApp title={title} subTitle={subtitle} />);
        expect(container).toMatchSnapshot();
    });
    test('Should show title in h5 tag', () => {
        render(<FirstApp title={title} subTitle={subtitle} />);
        // screen.debug();
        expect(screen.getByText(title)).toBeTruthy();
        expect(screen.getByRole('heading', { level: 5 }).innerHTML).toContain(title);

    });
    test('Should show subtitle sended by props', () => {
        render(<FirstApp title={title} subTitle={subtitle} />);

        expect(screen.getAllByText(subtitle + 2).length).toBe(2);

    });
});