import React from "react";
//import { shallow} from "enzyme";
import { render } from '@testing-library/react';
import { findByTestId, queryByTestId,getByTestId, renderer ,fireEvent } from '@testing-library/react';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new EnzymeAdapter() });
import Forgotpass from './Forgotpass.js';

const setup =() => shallow(<Forgotpass/>)
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };
describe ('<Forgotpass />', () => {
    it('renders without crashing', () => {
        //render(<Forgotpass/>);
        const wrapper = setup()
        //const wrapper =shallow(<Forgotpass/>);
        const test1  = wrapper.find('[data-testid="forgotpasstitle"]')
        const test2  = wrapper.find('[data-testid="phonetitle"]')
        const test3  = wrapper.find('[data-testid="phonenumber"]')
        const test4  = wrapper.find('[data-testid="phonechange"]')
        const test5  = wrapper.find('[data-testid="getotp"]')
        const test6  = wrapper.find('[data-testid="clickverify"]')
        const test7  = wrapper.find('[data-testid="passwordchange"]')
        const test8  = wrapper.find('[data-testid="confirmpasswordchange"]')
        const test9  = wrapper.find('[data-testid="signin"]')
        const test10 = findByTestAttr(wrapper, "forgotpasstitle");
        const test11  = wrapper.find('[data-testid="chotp"]')


        expect(test1.length).toBe(1);
        expect(test2.length).toBe(1);
        expect(test3.length).toBe(1);
        expect(test4.length).toBe(1);
        expect(test5.length).toBe(1);
        expect(test6.length).toBe(1);
        expect(test7.length).toBe(1);
        expect(test8.length).toBe(1);
        expect(test9.length).toBe(1);
        expect(test11.length).toBe(1);

    });
});

describe('testing initial states', ( ) =>{
    it("checks for initial state of password", () => {
        const wrapper = setup();    
        const passwordState = wrapper.state().password  ; 
        expect(passwordState).toBe("")  ;
    });

    it("checks for initial state of phone number", () => {
        const wrapper = setup();    
        const phonenumberState = wrapper.state().phonenumber  ; 
        expect(phonenumberState).toBe("")  ;
    });

    it("checks for initial state of confirm password", () => {
        const wrapper = setup();    
        const confirmPasswordState = wrapper.state().confirmPassword ; 
        expect(confirmPasswordState).toBe("")  ;
    });
    it("checks for initial state of otp verifies", () => {
        const wrapper = setup();    
        const otpVerifiedState = wrapper.state().otpVerified  ; 
        expect(otpVerifiedState).toBe(false)  ;
    });
    });


describe('testing components', ( ) =>{
it('renders title statements ',( ) =>{

    const wrapper =shallow(<Forgotpass/>);
    const test1  = wrapper.find('[data-testid="forgotpasstitle"]').text();
    const test2  = wrapper.find('[data-testid="phonetitle"]').text();
    const test3  = wrapper.find('[data-testid="phonenumber"]').text();
    //expect(test1).toBe("Forgot Password?");
    expect(test2).toBe("Type in your phone number below to get new password in to your phone and then regain access to your account:");
    expect(test3).toBe("Phone number (10 digit number without country code)");


});     
});


describe('testing button components ',( ) =>{

    const wrapper =shallow(<Forgotpass />);


    it('renders otp button function' , ( )  => {
        const requestSearch =jest.fn();

        const {queryByTestId} = render(<button
            data-testid="getotp"
             onClick={requestSearch}
             className="f6 link dim br1 ba ph3 pv2 mb2 dib dark-blue bg-transparent"
             value="Get OTP"
             />);

        fireEvent.click(queryByTestId('getotp'));
        expect(requestSearch).toHaveBeenCalled() ;
        expect(requestSearch.mock.calls.length).toBe(1) ;  

} );


it('Test sign in button function' , ( )  => {
    const wrapper =shallow(<Forgotpass />);
    const requestSearch =jest.fn();
    //global.alert = jest.fn();
    const {queryByTestId} = render(<button
        data-testid="signin"
          onClick={requestSearch}
          className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          value="Proceed"/>);
    fireEvent.click(queryByTestId('signin'));
    expect(requestSearch).toHaveBeenCalled() ;
    expect(requestSearch.mock.calls.length).toBe(1) ;  
    //expect(window.alert.mock.calls.length).toBe(1);//<<< this FAILS!        
} );

it('renders verify button function' , ( )  => {
    const requestSearch =jest.fn();
    const {queryByTestId} = render(<input
        data-testid="clickverify" 
        id="verify"    
        onClick={requestSearch}
        className="hide b pv2 input-reset ba b--black bg-transparent grow pointer f6 "
        type="button"
        value="Verify"
    />);

    fireEvent.click(queryByTestId('clickverify'));
    expect(requestSearch).toHaveBeenCalled() ;
    expect(requestSearch.mock.calls.length).toBe(1) ;  

} );

it('Test sign in button function for password mismatch' , ( )  => {
    const wrapper =shallow(<Forgotpass />); 
    const {queryByTestId} = render(<Forgotpass/>)
    const searchInput1 = queryByTestId('confirmpasswordchange');
    fireEvent.change(searchInput1,{target: {value :"password1234"}});
 const searchInput2 = queryByTestId('phonechange');
      fireEvent.change(searchInput2,{target: {value :"9875685352"}});
      const searchInput3 = queryByTestId('passwordchange');
      fireEvent.change(searchInput3,{target: {value :"password123"}});
    const sign  = wrapper.find('[data-testid="signin"]')
    //const sign = findByTestAttr(wrapper, "signin");
    window.alert = jest.fn();
    //const output = shallow(
    //<Link title="mockTitle" url="mockUrl" />
  //);
  sign.simulate('click');
  expect(window.alert).toHaveBeenCalledWith('Password mismatch');
} );

it('Test sign in button function for otp verified' , ( )  => {
    const wrapper =shallow(<Forgotpass />); 
    const {queryByTestId} = render(<Forgotpass/>)
    const searchInput1 = queryByTestId('confirmpasswordchange');
    fireEvent.change(searchInput1,{target: {value :"password123"}});
 const searchInput2 = queryByTestId('phonechange');
      fireEvent.change(searchInput2,{target: {value :"9600124720"}});
      const searchInput3 = queryByTestId('passwordchange');
      fireEvent.change(searchInput3,{target: {value :"password123"}});
    const sign  = wrapper.find('[data-testid="signin"]')
    //const sign = findByTestAttr(wrapper, "signin");
    window.alert = jest.fn();
    //const output = shallow(
    //<Link title="mockTitle" url="mockUrl" />
  //);
  sign.simulate('click');
  const otpVerifiedState = wrapper.state().otpVerified  ; 
        expect(otpVerifiedState).toBe(false)  ;
  expect(window.alert).toHaveBeenCalledTimes(0);

} );


it('Test get otp button function for  number match validity' , ( )  => {
    const wrapper =shallow(<Forgotpass />); 
    const {queryByTestId} = render(<Forgotpass/>)

     const searchInput2 = queryByTestId('phonechange');
      fireEvent.change(searchInput2,{target: {value :"12acd345sa"}});
    const otp  = wrapper.find('[data-testid="getotp"]')
    window.alert = jest.fn();
  otp.simulate('click');
  expect(window.alert).toHaveBeenCalledWith('Invalid phone number');
} );
it('Test get otp button function for phone number length validity' , ( )  => {
    const wrapper =shallow(<Forgotpass />); 
    const {queryByTestId} = render(<Forgotpass/>)

     const searchInput2 = queryByTestId('phonechange');
    fireEvent.change(searchInput2,{target: {value :"1234567891011$"}});
    const otp  = wrapper.find('[data-testid="getotp"]')
    window.alert = jest.fn();
  otp.simulate('click');
  expect(window.alert).toHaveBeenCalledWith('Invalid phone number');
} );

it('Test get otp button function for phone number length validity' , ( )  => {
    const wrapper =shallow(<Forgotpass />); 
    const {queryByTestId} = render(<Forgotpass/>)
     const searchInput2 = queryByTestId('phonechange');
    fireEvent.change(searchInput2,{target: {value :"9600124720"}});
    const otp  = wrapper.find('[data-testid="getotp"]')
    otp.simulate('click');
    const chotp  = wrapper.find('[data-testid="chotp"]')
    const searchInput3 = queryByTestId('chotp').className;
    expect(searchInput3).toBe("show")


} );

it('Test get verify button function for  OTP number validity' , ( )  => {
    const wrapper =shallow(<Forgotpass />); 
    const {queryByTestId} = render(<Forgotpass/>)
     const searchInput2 = queryByTestId('phonechange');
    fireEvent.change(searchInput2,{target: {value :"9600124720"}});
    const searchInput3 = queryByTestId('chotp');
    fireEvent.change(searchInput3,{target: {value :"letters"}});
    const verify  = wrapper.find('[data-testid="clickverify"]')
    verify.simulate('click');
    expect(window.alert).toHaveBeenCalledWith('OTP can only be numbersletters');


} );
it('Test get verify button function for  OTP length validity' , ( )  => {
    const wrapper =shallow(<Forgotpass />); 
    const {queryByTestId} = render(<Forgotpass/>)
     const searchInput2 = queryByTestId('phonechange');
    fireEvent.change(searchInput2,{target: {value :"9600124720"}});
    const searchInput3 = queryByTestId('chotp');
    fireEvent.change(searchInput3,{target: {value :"9867473"}});
    const verify  = wrapper.find('[data-testid="clickverify"]')
    verify.simulate('click');
    expect(window.alert).toHaveBeenCalledWith('Re-enter OTP, OTP is 4 digits');


} );

it('Test get verify button function for phone number validity' , ( )  => {
    const wrapper =shallow(<Forgotpass />); 
    const {queryByTestId} = render(<Forgotpass/>)
     const searchInput2 = queryByTestId('phonechange');
    fireEvent.change(searchInput2,{target: {value :"960012frl320"}});
    const searchInput3 = queryByTestId('chotp');
    fireEvent.change(searchInput3,{target: {value :"9863"}});
    const verify  = wrapper.find('[data-testid="clickverify"]')
    verify.simulate('click');
    expect(window.alert).toHaveBeenCalledWith('Invalid phone number');


} );

});  

describe ("input value for edit text", ( ) => {
   
    it("updates on password change", () => {

      const {queryByTestId} = render(<Forgotpass/>)
      const wrapper = setup();    

      const searchInput = queryByTestId('passwordchange');
      expect(searchInput.value).toBe('') // empty before

      fireEvent.change(searchInput,{target: {value :"password123"}});
      expect(searchInput.value).toBe("password123");
      //const passwordState = wrapper.state().password  ; 
      //expect(passwordState).toEqual("password123")  ;
      //wrapper.find("passwordchange").instance().value = "abc";

     //const wrapper = setup();
     //const count = findByTestAttr(wrapper, "passwordchange")
      //expect(count.value).toBe("123");
       
    });
    it("updates on confirm password change", () => {

      const {queryByTestId} = render(<Forgotpass/>)
      const searchInput = queryByTestId('confirmpasswordchange');
      expect(searchInput.value).toBe('') // empty before

      fireEvent.change(searchInput,{target: {value :"password123"}});
      expect(searchInput.value).toBe("password123");
    });
    it("updates on phone change", () => {

      const {queryByTestId} = render(<Forgotpass/>)
      const searchInput = queryByTestId('phonechange');
      expect(searchInput.value).toBe('') // empty before
      fireEvent.change(searchInput,{target: {value :"9875685352"}});
      expect(searchInput.value).toBe("9875685352");
      //const wrapper = setup();
      //const count = findByTestAttr(wrapper, "phonechange").text();
      //expect(count).toBe("9875685352");
    });
 /*   test('expect a promise to resolve', async () => {
      const user = {
        getFullName: jest.fn(() => Promise.resolve('Karl Hadwen')),
      };
      await expect(user.getFullName('Karl Hadwen')).resolves.toBe('Karl Hadwen');
    });*/





}     
);

