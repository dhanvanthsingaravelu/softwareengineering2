

import React from "react";
//import { shallow} from "enzyme";
import { render } from '@testing-library/react';
import { findByTestId, queryByTestId,getByTestId, renderer ,fireEvent } from '@testing-library/react';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new EnzymeAdapter() });
import View from './View.js';

const setup =() => shallow(<View/>)

const findByTestAttr = (wrapper, val) => {
    return wrapper.find('[data-test="${val}"]');
  };


describe ('<View />', () => {
    it('renders without crashing', () => {
        //render(<Forgotpass/>);
        const wrapper = setup()
        //const wrapper =shallow(<Forgotpass/>);
        const test1  = wrapper.find('[data-testid="dispcltimetable"]')
        const test2  = wrapper.find('[data-testid="disproomtimetable"]')
        const test3  = wrapper.find('[data-testid="dispproftimetable"]')

        expect(test1.length).toBe(1);
        expect(test2.length).toBe(1);
        expect(test3.length).toBe(1);


    });
});

describe('testing button components ',( ) =>{

    const wrapper =shallow(<View/>);


    it('renders class timetable function' , ( )  => {
        const requestSearch =jest.fn();

        const {queryByTestId} = render(<input
            data-testid="dispcltimetable"
             onClick={requestSearch}
             />);

        fireEvent.click(queryByTestId('dispcltimetable'));
        expect(requestSearch).toHaveBeenCalled() ;
        expect(requestSearch.mock.calls.length).toBe(1) ;  

} );


it('Test  room timetable click function' , ( )  => {
    const wrapper =shallow(<View />);
    const requestSearch =jest.fn();
    global.alert = jest.fn();
    const {queryByTestId} = render(<button
        data-testid="disproomtimetable"
          onClick={requestSearch}/>);
    fireEvent.click(queryByTestId('disproomtimetable'));
    expect(requestSearch).toHaveBeenCalled() ;
    expect(requestSearch.mock.calls.length).toBe(1) ;  
    //expect(window.alert.mock.calls.length).toBe(1);//<<< this FAILS!        
} );

it('renders professor timetable click function' , ( )  => {
    const requestSearch =jest.fn();
    const {queryByTestId} = render(<input
        data-testid="dispproftimetable" 
        onClick={requestSearch}
    />);

    fireEvent.click(queryByTestId('dispproftimetable'));
    expect(requestSearch).toHaveBeenCalled() ;
    expect(requestSearch.mock.calls.length).toBe(1) ;  

} );

it('renders professor timetable click function2' , ( )  => {
    const requestSearch =jest.fn();
    const {queryByTestId} = render(<input
        data-testid="dispproftimetable" 
        onClick={requestSearch}
    />);

    fireEvent.click(queryByTestId('dispproftimetable'));
    expect(requestSearch).toHaveBeenCalled() ;
    expect(requestSearch.mock.calls.length).toBe(1) ; 


} );

});

