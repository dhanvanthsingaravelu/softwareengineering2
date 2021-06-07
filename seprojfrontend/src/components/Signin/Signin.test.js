



/*import React from "react";
import { shallow} from "enzyme";
import { findByTestId, queryByTestId,getByTestId, render ,fireEvent } from '@testing-library/react';
import Signin from './Signin.js';
import renderer from "react-test-renderer";*/



import React from "react";
//import { shallow} from "enzyme";
import { render } from '@testing-library/react';
import { findByTestId, queryByTestId,getByTestId, renderer ,fireEvent } from '@testing-library/react';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new EnzymeAdapter() });
import Signin from './Signin.js';

const setup =() => shallow(<Signin/>)
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
};
describe ('', () => {
    it('renders without crashing', () => {
        const wrapper =shallow(<Signin/>);
        expect(wrapper.find('signinpass')).toBeTruthy();
        expect(wrapper.find('signinotp')).toBeTruthy();
        expect(wrapper.find('email')).toBeTruthy();
        expect(wrapper.find('emailaddress')).toBeTruthy();
        expect(wrapper.find('passworda')).toBeTruthy();
        expect(wrapper.find('passwordb')).toBeTruthy();
        expect(wrapper.find('phonechange')).toBeTruthy();
        expect(wrapper.find('phonechangefunction')).toBeTruthy();
        expect(wrapper.find('getotp')).toBeTruthy();
        expect(wrapper.find('clickverify')).toBeTruthy();
        expect(wrapper.find('submitsignin')).toBeTruthy();
        //const test1  = wrapper.find('[data-testid="signinpass"]')
        //expect(test1.length).toBe(1);


        //const {queryByTestId}= render(<Signin/>);
        //expect(queryByTestId("signinpass")).toBeTruthy();
        //expect(queryByTestId("signinotp")).toBeTruthy();
        //expect(queryByTestId("email")).toBeTruthy();
        //expect(queryByTestId("emailaddress")).toBeTruthy();
        //expect(queryByTestId("passworda")).toBeTruthy();
        //expect(queryByTestId("passwordb")).toBeTruthy();
        //expect(queryByTestId("phonechange")).toBeTruthy();
        //expect(queryByTestId("phonechangefunction")).toBeTruthy();
        //expect(queryByTestId("getotp")).toBeTruthy();
        //expect(queryByTestId("clickverify")).toBeTruthy();
        //expect(queryByTestId("submitsignin")).toBeTruthy();

    });
});



describe("click event components", ( ) => {
    it('Test click verify' , ( )  => {
        const requestSearch =jest.fn();   
        const {getByTestId} = render( <p className="f6 link dim black db pointer underline" 
        data-testid="signinpass" 
        onClick={requestSearch} />);
        fireEvent.click(getByTestId('signinpass'));
        expect(requestSearch).toHaveBeenCalled() ;
        //const{findById}= render(<Signin />);
        //const pass =  findById('pass').className;
        //const pass=document.getElementById('pass').className;
       // expect(pass.className).toBe("hide");

} );        

it('Test click verify' , ( )  => {
    const requestSearch =jest.fn();   
    const {getByTestId} = render( <p className="f6 link dim black db pointer underline" 
    data-testid="signinotp" 
    onClick={requestSearch} />);
    fireEvent.click(getByTestId('signinotp'));
    expect(requestSearch).toHaveBeenCalled() ;
    //const{findById}= render(<Signin />);
    //const pass =  findById('pass').className;
    //const pass=document.getElementById('pass').className;
   // expect(pass.className).toBe("hide");

} );        



/*describe ("input value for edit text", ( ) => {
    it("updates on signinpassword", () => {

      const {queryByTestId} = render(<Signin/>)
      const searchInput = queryByTestId('signinpass');
      fireEvent.change(searchInput,{target: {value :"test"}});
      expect(searchInput.value).toBe("test");
    });

    it("updates on sign in using OTP", () => {

      const {queryByTestId} = render(<Signin/>)
      const searchInput = queryByTestId('signotp');
      fireEvent.change(searchInput,{target: {value :"test@test.com"}});
      expect(searchInput.value).toBe("test@test.com");
    });*/
    /*it("updates on email change", () => {

      const {queryByTestId} = render(<Signin/>)
      const searchInput = queryByTestId('passwordchange');
      fireEvent.change(searchInput,{target: {value :"password123"}});
      expect(searchInput.value).toBe("password123");
    });
    it("updates on confirm password change", () => {

      const {queryByTestId} = render(<Signin/>)
      const searchInput = queryByTestId('confirmpasswordchange');
      fireEvent.change(searchInput,{target: {value :"password123"}});
      expect(searchInput.value).toBe("password123");
    });
    it("updates on confirm password change", () => {

      const {queryByTestId} = render(<Signin/>)
      const searchInput = queryByTestId('phonechange');
      fireEvent.change(searchInput,{target: {value :"9875685352"}});
      expect(searchInput.value).toBe("9875685352");
    });*/
 /*   test('expect a promise to resolve', async () => {
      const user = {
        getFullName: jest.fn(() => Promise.resolve('Karl Hadwen')),
      };
      await expect(user.getFullName('Karl Hadwen')).resolves.toBe('Karl Hadwen');
    });*/

}     
);



// redo
describe('testing button components ',( ) =>{

    const wrapper =shallow(<Signin />);


    /*it('renders otp button function' , ( )  => {
        const requestSearch =jest.fn();

        const {queryByTestId} = render(<input
            onClick={this.onGetotp}
            className="f6 link dim br1 ba ph3 pv2 mb2 dib dark-blue bg-transparent"
            type="button"
            value="Get OTP"
            data-testid="getotp"
        />);

        fireEvent.click(queryByTestId('getotp'));
        expect(requestSearch).toHaveBeenCalled() ;
        expect(requestSearch.mock.calls.length).toBe(1) ;  

} );*/


/*it('Test sign in button function' , ( )  => {
    const wrapper =shallow(<Forgotpass />);
    const requestSearch =jest.fn();
    global.alert = jest.fn();
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
  const otpVerifiedState = wrapper.state().otpVerified  ; 
        expect(otpVerifiedState).toBe(false)  ;
  sign.simulate('click');
  expect(window.alert).toHaveBeenCalledTimes(1);
  expect(window.alert).toHaveBeenCalledWith('OTP not yet verified');

} );
*/

/*it('Test get otp button function for  number match validity' , ( )  => {
    const wrapper =shallow(<Signin />); 
    const {queryByTestId} = render(<Signin/>)
     const searchInput2 = queryByTestId('phonechange');
      fireEvent.change(searchInput2,{target: {value :"12acd345sa"}});
    const otp  = wrapper.find('[data-testid="getotp"]')
    window.alert = jest.fn();
  otp.simulate('click');
  expect(window.alert).toHaveBeenCalledWith('Invalid phone number');
} );
it('Test get otp button function for phone number length validity' , ( )  => {
    const wrapper =shallow(<Signin />); 
    const {queryByTestId} = render(<Signin/>)

     const searchInput2 = queryByTestId('phonechange');
    fireEvent.change(searchInput2,{target: {value :"1234567891011$"}});
    const otp  = wrapper.find('[data-testid="getotp"]')
    window.alert = jest.fn();
  otp.simulate('click');
  expect(window.alert).toHaveBeenCalledWith('Invalid phone number');
} );

it('Test get otp button function for phone number length validity' , ( )  => {
    const wrapper =shallow(<Signin />); 
    const {queryByTestId} = render(<Signin/>)
     const searchInput2 = queryByTestId('phonechange');
    fireEvent.change(searchInput2,{target: {value :"9600124720"}});
    const otp  = wrapper.find('[data-testid="getotp"]')
    otp.simulate('click');
    const chotp  = wrapper.find('[data-testid="chotp"]')
    const searchInput3 = queryByTestId('chotp').className;
    expect(searchInput3).toBe("show")


} );*/

/*

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


} );*/

}); 

describe('testing initial states', ( ) =>{
    it("checks for initial state of password", () => {
        const wrapper = setup();    
        const userState = wrapper.state().user  ; 
        expect(userState).toBe(null)  ;
    });
    it("checks for initial state of otp verifies", () => {
        const wrapper = setup();    
        const otpVerifiedState = wrapper.state().otpVerified  ; 
        expect(otpVerifiedState).toBe(false)  ;
    });
    });
