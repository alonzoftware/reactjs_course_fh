import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks";

describe('Test useForm', () => {
    const initialForm = {
        name: "alonzo",
        email: "alonzo@i.com"
    }
    test('Should show initialForm', () => {

        const { result } = renderHook(() => useForm(initialForm));
        //console.log(result.current);
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        })

    });
    test('Should change name', () => {
        const newValue = "Juan";
        const initialForm = {
            name: "alonzo",
            email: "alonzo@i.com"
        }

        const { result } = renderHook(() => useForm(initialForm));
        act(() => {
            result.current.onInputChange({ target: { name: 'name', value: newValue } } as React.ChangeEvent<HTMLInputElement>);
        })
        // console.log(result.current);
        expect(result.current).toEqual({
            name: newValue,
            email: initialForm.email,
            formState: { name: newValue, email: initialForm.email },
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        })

    });
    test('Should Reset Form', () => {
        const newValue = "Juan";
        const initialForm = {
            name: "alonzo",
            email: "alonzo@i.com"
        }

        const { result } = renderHook(() => useForm(initialForm));
        act(() => {
            result.current.onInputChange({ target: { name: 'name', value: newValue } } as React.ChangeEvent<HTMLInputElement>);
            result.current.onResetForm();
        })
        // console.log(result.current);
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        })

    });
});