import { fireEvent, render,screen } from "@testing-library/react";
import { useTodos } from '../../src/hooks/useTodos';
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import React from "react";

jest.mock('../../src/hooks/useTodos');

describe('Test in <TodoApp />', () => {

    const useTodosMock = useTodos as jest.MockedFunction<typeof useTodos>;
    useTodosMock.mockReturnValue({
        todos: [
            { id: 1, descrip: 'Todo #1', done: true },
            { id: 2, descrip: 'Todo #2', done: false },
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        onAddTodoHandler: jest.fn(),
        onDelItemHandler: jest.fn(),
        onToggleItemHandler: jest.fn(),
    });
    //RESET ALL MOCKS BEFORE TEST
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should display the component correctly', () => { 

        render(<TodoApp />)
        //screen.debug();
        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
        console.log(screen.getByRole('textbox').className);
        
     })    
});