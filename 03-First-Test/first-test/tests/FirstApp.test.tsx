import { render } from "@testing-library/react";
import React from "react";
import { FirstApp } from "../src/FirstApp";

describe('<FirstApp />', () => {
    // test('Match with SNAPSHOT', () => {
    //     const title = "Hola soy tofu"
    //     const { container } = render(<FirstApp title={title} subTitle={7} />);
    //     expect(container).toMatchSnapshot();

    // });
    test('Should show title in h5 tag', () => {
        const title = "Hola Soy tofu"
        const { container, getByText, getByTestId } = render(<FirstApp title={title} subTitle={7} />);
        expect(getByText(title)).toBeTruthy();
        const h5 = container.querySelector('h5');
        // console.log(h5?.innerHTML);
        // expect(h5?.innerHTML).toBe(title);
        // expect(h5?.innerHTML).toContain(title);

        expect(getByTestId('id-title').innerHTML).toContain(title);

    });
    test('Should show subtitle sended by props', () => {
        const title = "Hola Soy tofu"
        const subtitle = 8
        const { getAllByText } = render(<FirstApp title={title} subTitle={subtitle} />);

        expect(getAllByText(subtitle + 2).length).toBe(2);

    });
});