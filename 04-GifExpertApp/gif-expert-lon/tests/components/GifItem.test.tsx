import { render, screen } from "@testing-library/react";
import React from "react";
import { GifItem } from "../../src/components/index"
import { iImg } from "../../src/helpers/get-gifs";

//https://stackoverflow.com/questions/54335464/jest-test-on-typescript-file-syntax-error-interface-is-a-reserved-word-in-stri
//https://www.pluralsight.com/guides/how-to-test-react-components-in-typescript

describe('Test for <GifItem />', () => {
    const img: iImg = { id: 1, title: "Title for test", url: "url for test" };
    test('Match with Snapshot', () => {
        // const { container } = render(<GifItem {...({ id: 1, title: "Title for test", url: "url for test" })} />);
        const { container } = render(<GifItem {...img} />);
        expect(container).toMatchSnapshot();

    });
    test('img with URL and ALT with title', () => {
        render(<GifItem {...img} />);
        //First Way
        expect(screen.getByRole("img")).toHaveAttribute("src", img.url);
        expect(screen.getByRole("img")).toHaveAttribute("alt", img.title);
        //Second Way
        // console.log(screen.getByRole("img").getAttribute("src"));
        expect(screen.getByRole("img").getAttribute("src")).toBe(img.url);
        expect(screen.getByRole("img").getAttribute("alt")).toBe(img.title);
    });

    test('Search title TEXT', () => {
        render(<GifItem {...img} />);
        expect(screen.getByText(img.title)).toBeTruthy();
    });
});