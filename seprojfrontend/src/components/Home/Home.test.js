
import React from "react";
//import { shallow} from "enzyme";
import { render } from '@testing-library/react';
import { findByTestId, queryByTestId,getByTestId, renderer ,fireEvent } from '@testing-library/react';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new EnzymeAdapter() });
import Home from './Home.js';





describe ('rendering image components', () => {

it('should see image source', () => {
    const container = shallow(<Home/>)
    expect(container.find('[data-testid="pic1"]').props().src).toEqual('undraw1.svg')
})

it('should see image source', () => {
    const container = shallow(<Home/>)
    expect(container.find('[data-testid="pic2"]').props().src).toEqual('undraw2.svg')
})

it('should see image source', () => {
    const container = shallow(<Home/>)
    expect(container.find('[data-testid="pic3"]').props().src).toEqual('undraw3.svg')
})

})

describe ('<Home />', () => {
   // it('renders without crashing', () => {
        //render(<Home />);
   // });   

    it('testing title statements',( ) =>{

        const wrapper =shallow(<Home />);
        const test1  = wrapper.find('[data-testid="t1"]').text();
        const test2  = wrapper.find('[data-testid="t2"]').text();
        const test3  = wrapper.find('[data-testid="t3"]').text();
        const test4  = wrapper.find('[data-testid="t4"]').text();


        expect(test1).toBe("Welcome to our Room Occupancy Chart Generation Application");
        expect(test2).toBe("What do you want to do?");
        expect(test4).toBe("View Timetables or Room Occupancy Charts");
        //expect(test3).toBe("Reserve a room or Cancel a room booking ");


    });     
    it('testing link',( ) =>{  
        const wrapper =shallow(<Home />);
        const l1 = wrapper.find('a.headc');

        //l1.simulate("click");
        //console.log("clicked");
        //const test5 = wrapper.find('a.headc').text();
        //expect(test5).toBe("register")

    });


it("Component renders link to /somewhere", () => {

    const container = shallow(<Home/>)
    expect(container.find('[data-testid="l4"]').props().to).toEqual('/view')
})
  

});



describe ('<Home />', () => {


        //  it('renders without crashing', () => {
        //render(<Home />);
        //});   


it("Component renders link to /somewhere", () => {

    const container = shallow(<Home/>)
    expect(container.find('[data-testid="l4"]').props().to).toEqual('/view')
})

it("Component renders link to /somewhere", () => {

    const container = shallow(<Home/>)
    expect(container.find('[data-testid="l3"]').props().to).toEqual('/reservecancel')
})

/*it("Component renders link to /somewhere", () => {

    const container = shallow(<Home/>)
    expect(container.find('[data-testid="l5"]').props().to).toEqual('/aftersignin')
})*/
  

}); 



/*test('Link changes the class when hovered', () => {
    const container = shallow(<Home/>)
    const component = container.find('[data-testid="l3"]')
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });*/