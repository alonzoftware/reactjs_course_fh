import { render } from "@testing-library/react";
import React from "react";
import { FirstApp } from "../src/FirstApp";

describe('<FirstApp />', () => {
    test('Match with SNAPSHOT', () => {
        const { container } = render(<FirstApp title="Holafo" subTitle={7} />);
        expect(container).toMatchSnapshot();

    });
    test('Should show title in h1 tag', () => {
        const title = "Hola Soy tofu"
        const { container, getByText } = render(<FirstApp title={title} subTitle={7} />);
        expect(getByText(title)).toBeTruthy();
        const h5 = container.querySelector('h5');
        // console.log(h5?.innerHTML);
        expect(h5?.innerHTML).toBe(title);
        expect(h5?.innerHTML).toContain(title);


    });
});