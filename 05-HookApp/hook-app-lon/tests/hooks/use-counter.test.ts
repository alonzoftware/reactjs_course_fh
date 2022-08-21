import { renderHook } from "@testing-library/react";
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
});

