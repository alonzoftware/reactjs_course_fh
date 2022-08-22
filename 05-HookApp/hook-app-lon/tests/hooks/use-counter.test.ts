import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from '../../src/hooks';


describe('Test useCounter', () => {

    test('should default values', () => {
        const { result } = renderHook(() => useCounter());
        // console.log(result);
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('should value tobe 100', () => {
        const initialValue = 100
        const { result } = renderHook(() => useCounter(initialValue));


        expect(result.current.counter).toBe(100);
    });
    test('should increment the counter', () => {
        const initialValue = 100
        const { result } = renderHook(() => useCounter(initialValue));

        const { counter, increment } = result.current;
        act(() => {
            increment();
            increment(2);
        })
        expect(result.current.counter).toBe(103);
    });
    test('should decrement the counter', () => {
        const initialValue = 100
        const { result } = renderHook(() => useCounter(initialValue));

        const { counter, decrement } = result.current;
        act(() => {
            decrement();
            decrement(2);
        })
        expect(result.current.counter).toBe(97);
    });
    test('should reset the counter', () => {
        const initialValue = 100
        const { result } = renderHook(() => useCounter(initialValue));

        const { counter, decrement, reset } = result.current;
        act(() => {
            decrement();
            decrement(2);
        });
        expect(result.current.counter).toBe(97);
        act(() => {
            reset();
        });
        expect(result.current.counter).toBe(100);
    });

});