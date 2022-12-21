import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useLocation} from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';


// const mockedUseLocation = jest.fn();

// jest.mock('react-router', () => ({
//     ...jest.requireActual("react-router") as {},
//        useLocation: jest.fn().mockImplementation(() => {
//         return { pathname: "/testroute" };
//        })
//     }));

// jest.mock('react-router-dom',()=>({
//     ...jest.requireActual('react-router-dom')  as {},
//     useLocation: jest.fn().mockImplementation(() => {
//                 return { pathname: '/search', search: '' };
//                })
// }));


describe('Test in <SearchPage/>', () => { 
    test('should show with default values', () => {


       const {container} = render (

        <MemoryRouter>
            <SearchPage />

        </MemoryRouter>

       );
       //expect(container).toMatchSnapshot();
    });



 })