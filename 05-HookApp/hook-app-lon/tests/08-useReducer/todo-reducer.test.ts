import { iTodo } from '../../src/08-useReducer/TodoList';
import { todoReducer } from '../../src/08-useReducer/todoReducer';
describe('Test todoReducer', () => {

    const initialState: iTodo[] = [
        {
            id: 1,
            descrip: 'Demo Todo',
            done: false
        }
    ]
    test('should show initial state', () => {
        const action = { type: '', payload: { id: 0, descrip: '', done: false, } };
        const newState = todoReducer(initialState, action);
        expect(newState).toBe(initialState);


    })
    test('should add an TODO', () => {
        const action = { type: '[TODO] Add Todo', payload: { id: 2, descrip: 'Demo Todo 2', done: false, } };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
        console.log(newState);

    })
    test('should remove an TODO', () => {
        const action = { type: '[TODO] Remove Todo', payload: { id: 1, descrip: 'Anything', done: false, } };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
        console.log(newState);
    })
    test('should Toggle TODO', () => {
        const action = { type: '[TODO] Toggle Todo', payload: { id: 1, descrip: 'Anything', done: false, } };
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
        console.log(newState);
    })

})