
import { fireEvent, render,screen } from "@testing-library/react";
import { iTodo } from "../../src/08-useReducer/TodoList";
import { TodoItem } from "../../src/08-useReducer/TodoItem";
import React from "react";

describe('Test <TodoItem />', () => {
    const todo : iTodo = {
        id: 1,
        descrip : 'Piedra del Alma',
        done:false
    }
    const onToggleItemMock : Function = jest.fn();
    const onDelItemMock : Function= jest.fn();

    beforeEach(()=>jest.clearAllMocks());

    test('should show pending TODO', () => { 
        render(<TodoItem 
            {...todo}
            onDelItem={onDelItemMock}
            onToggleItem={onToggleItemMock}
            />);
        //screen.debug();
        const liElement = screen.getByRole('listitem');
        // console.log(liElement.innerHTML);
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        const spanElement = screen.getByLabelText('span');
        //console.log(spanElement.className);
        expect(spanElement.className).toBe('align-self-center '); //With space
        expect(spanElement.className).toContain('align-self-center');
        
     })
    test('should show done TODO', () => { 
        todo.done = true;
        render(<TodoItem 
            {...todo}
            onDelItem={onDelItemMock}
            onToggleItem={onToggleItemMock}
            />);
        const spanElement = screen.getByLabelText('span');
        //console.log(spanElement.className);
        expect(spanElement.className).toBe('align-self-center text-decoration-line-through');
     })
    test('onToggleItem have been Called', () => { 

        render(<TodoItem 
            {...todo}
            onDelItem={onDelItemMock}
            onToggleItem={onToggleItemMock}
            />);
        const spanElement = screen.getByLabelText('span');
        //console.log(spanElement.className);
        fireEvent.click(spanElement);
        expect(onToggleItemMock).toHaveBeenCalledWith(todo.id);
     })
    test('onDelItem have been Called', () => { 

        render(<TodoItem 
            {...todo}
            onDelItem={onDelItemMock}
            onToggleItem={onToggleItemMock}
            />);
        const buttonElement = screen.getByRole('button');
        //console.log(spanElement.className);
        fireEvent.click(buttonElement);
        expect(onDelItemMock).toHaveBeenCalledWith(todo.id);
     })



 })