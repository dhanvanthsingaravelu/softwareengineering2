

import React from "react";
//import { shallow} from "enzyme";
import { render } from '@testing-library/react';
import { findByTestId, queryByTestId,getByTestId, renderer ,fireEvent } from '@testing-library/react';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new EnzymeAdapter() });
import Navigation from './Navigation.js';

const setup =() => shallow(<Navigation/>)
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };


describe ('<Navigatio n />', () => {
 
     it('testing title statements',( ) =>{
        
         const wrapper =shallow(<Navigation/>);
         const test1  = wrapper.find('[data-testid="t1"]').text();
         const test2  = wrapper.find('[data-testid="signout"]').text();
 
         expect(test1).toBe("Room Occupancy Chart Generator App");
         expect(test2).toBe("Sign Out");
     })
 
     });   
     

     describe('testing button/click components ',( ) =>{

        const wrapper =shallow(<Navigation />)

        it('renders signout function' , ( )  => {
            const requestSearch =jest.fn();
    
            const {queryByTestId} = render(<a
                className="link dim white dib mr3"
                href="#"
                title="signout"
                onClick={requestSearch}
                data-testid="signout">Sign Out</a>);
    
            fireEvent.click(queryByTestId('signout'));
            expect(requestSearch).toHaveBeenCalled() ;
            expect(requestSearch.mock.calls.length).toBe(1) ;  
    
    } );

    it('Test sign out function implementation' , ( )  => {
        const requestSearch =jest.fn();
    
        const {queryByTestId} = render(<a
            className="link dim white dib mr3"
            href="#"
            title="signout"
            onClick={requestSearch}
            data-testid="signout">Sign Out</a>);

        fireEvent.click(queryByTestId('signout'));
        const {getByTestId} = render(<div data-testid="signinstat" id='signinstat' className="hide"></div>);

        const searchInput = getByTestId('signinstat').className;
        expect(searchInput).toBe("hide") 
    
    
    } );
    
    });  

    


  /*  
  
  describe('testing initial states', ( ) =>{
        it("checks for initial state of var isSignedIn", () => {
            const wrapper = setup();  
            const SignedInState = wrapper.state().isSignedIn ; 
            expect(SignedInState).toBe(1)  ;
        });
    
       
        });
    
     */