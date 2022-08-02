import { render } from "@testing-library/react";
import React from "react";
import { GifItem } from "../../src/components/index"
import { iImg } from "../../src/helpers/get-gifs";

//https://stackoverflow.com/questions/54335464/jest-test-on-typescript-file-syntax-error-interface-is-a-reserved-word-in-stri

describe('Test for <GifItem />', () => {
    test('Match with Snapshot', () => {
        // const img = { id: 1, title: "Title for test", url: "url for test" };
        const { container } = render(<GifItem {...({ id: 1, title: "Title for test", url: "url for test" })} />);
        expect(container).toMatchSnapshot();

    });
});