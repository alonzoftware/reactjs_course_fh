import { render, screen, configure } from "@testing-library/react";
configure({ asyncUtilTimeout: 400 });
import React from "react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";

describe('Test <MultipleCustomHooks />', () => {
    test('should show default component', () => {

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Loading ...'));
        expect(screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        expect(nextButton).toHaveAttribute('disabled');
        // screen.debug();

    });

    test('should show a Quote', () => {

    });

});


