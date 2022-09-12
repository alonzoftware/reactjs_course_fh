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

    })

})