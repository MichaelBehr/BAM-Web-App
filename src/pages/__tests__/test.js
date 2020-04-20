import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount, render } from 'enzyme';

// import our pages
import Navigator from '../router';
import BankInfo from '../bank_info';
import {default as Banking} from '../banking';
import DashboardPage from '../dashboard';
import LoginPage from '../login';
import ResetPage from '../reset';
import SignUpPage from '../sign_up';
import Summary from '../summary';
import {default as Snapshot} from '../snapshot';
import TermsAndConditionsPage from '../terms_and_conditions';
import PrelimInfo from '../prelim_info';
import {default as Budget_Info} from '../budget_info';
import Mainpage from '../Mainpage';


// import components
import AppBarExampleComposition from '../../components/NavBar';
import MenuNav from '../../components/MenuNav';
import SignUp from '../../components/SignUp';
import Login from '../../components/Login';
import Alert from '../../components/Alert';
import Reset from '../../components/Reset';
import formValid from '../../components/checkFormErrors';
import Success from '../../components/Success';
import RecentPurchases from '../../components/Dashboard_RecentPurchases';
import SavingsContainer from '../../components/Dashboard_SavingsContainer';
import SavingsProjection from '../../components/Dashboard_SavingsProjection';

// import test suite
import '../../setupTests';

// Test Navigator function from router
describe('Testing Navigator function from Router: ', () => {
  it('Renders without crashing', () => {
    shallow(<Navigator />);
  });
});

// TEST PAGE FUNCTIONS/COMPONENTS

//////////////// MAIN PAGE TEST SUITE /////////////////////////////////

// Main Page
describe('Main page: ', () => {
  it('Renders without crashing', () => {
    shallow(<Mainpage />);
  });
  it('Test switchToLoginCallback', () => {
    const wrapper = shallow(<Mainpage />);
    expect(wrapper.instance().switchToLoginCallback(true));
  });
  it('Test switchToRegisterCallback', () => {
    const wrapper = shallow(<Mainpage />);

    expect(wrapper.instance().switchToRegisterCallback(true));
  });
  it('Test switchToResetCallback', () => {
    const wrapper = shallow(<Mainpage />);
    expect(wrapper.instance().switchToResetCallback(true));
  });
  it('Test Reset', () => {
    const props = {
      showLogin: true,
      showRegister: true,
      showReset: false,
    };
    const wrapper = shallow(<Mainpage {...props} />);
  });
  it('Test prelimCallback', () => {
    const wrapper = shallow(<Mainpage />);
    expect(wrapper.instance().switchToPrelimCallback(true));
  });
  it('Test switchToExistingUserCallback', () => {
    const wrapper = shallow(<Mainpage />);
    expect(wrapper.instance().switchToExistingUserCallback(true));
  });
  it('Test setEmail', () => {
    const wrapper = shallow(<Mainpage />);
    expect(wrapper.instance().setEmail(true));
  });
});

//////////////// END MAIN PAGE TEST SUITE //////////////////////////////


/////////////////////// BANK INFO PAGE TEST SUITE /////////////////////

// Bank info page
describe('Testing bank info page: ', () => {
  it('Renders without crashing', () => {
    const values = {transit: '000', account: 'WhyAdi', branch: 'branch'};
    const props = { values,
    handleChange() {} };
    shallow(<BankInfo {...props}/>);
  });

  it('Testing continue function', () => {
    const values = {transit: '000', account: 'WhyAdi', branch: 'branch'};
    const props = { values, nextStep() {},
    handleChange() {} };
    const wrapper = shallow(<BankInfo{...props}/>);
    wrapper.setState({nextStep() {}});
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().continue());
  });

  it('Testing back function', () => {
    const values = {transit: '000', account: 'WhyAdi', branch: 'branch'};
    const props = { values, prevStep() {},
    handleChange() {} };
    const wrapper = shallow(<BankInfo {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().back(event));
  });

  it('Testing handleChange function', () => {
    const values = {transit: '000', account: 'WhyAdi', branch: 'branch'};
    const props = { values, prevStep() {},
    handleChange() {} };
    const wrapper = shallow(<BankInfo {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange('Input')(event));
  });

  it('Testing handleSubmit function: WRONG ENTRY', () => {
    const values = {transit: '00000', account: '0000000', branch: '000'};
    const props = { values, prevStep() {},
    handleChange() {} };
    const wrapper = shallow(<BankInfo {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleSubmit(event));
  });

  it('Testing handleSubmit function: RIGHT ENTRY', () => {
    const values = {transit: '00000', account: '0000000', branch: '000'};
    const props = { values, prevStep() {}, nextStep() {},
    handleChange() {} ,email: "bamtester13@gmail.com"};
    const wrapper = shallow(<BankInfo {...props}/>);
    wrapper.setState({transit: '00000', account: '0000000', branch: '000'});
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleSubmit(event));
  });
});


//////////////////// END BANK INFO PAGE TEST SUITE ////////////////////

//////////////////////// BANKING TEST SUITE ///////////////////////////

// Banking page
describe('Testing bank info function from banking page: ', () => {
  it('Renders without crashing', () => {
    shallow(<Banking />);
  });

  it('Testing handleChange function', () => {
    const values = {transit: '00000', account: '0000000', branch: '000'};
    const props = { values, prevStep() {},
    handleChange() {} };
    const wrapper = shallow(<Banking {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange('RIP')(event));
  });

  it('Testing handleSubmit function: WRONG ENTRY', () => {
    const values = {transit: '00000', account: '0000000', branch: '000'};
    const props = { values, prevStep() {},
    handleChange() {} };
    const wrapper = shallow(<Banking {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleSubmit(event));
  });

  it('Testing handleSubmit function: RIGHT ENTRY', () => {
    const values = {transit: '00000', account: '0000000', branch: '000'};
    const props = { values, prevStep() {},
    handleChange() {} ,email: "bamtester13@gmail.com"};
    const wrapper = shallow(<Banking {...props}/>);
    wrapper.setState({transit: '00000', account: '0000000', branch: '000'});
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleSubmit(event));
  });
});

////////////////////// END BANKING TEST SUITE /////////////////////////

// Snapshot page
describe('Testing Snapshot Page summary function: ', () => {
  it('Renders without crashing', () => {
    const values = {transit: '000', account: 'WhyAdi', branch: 'branch'};
    const props = { email: 'bamtester13@gmail.com',values, nextStep() {},
    handleChange() {} };
    const wrapper = shallow(<Snapshot{...props}/>);
  });

  it('Testing getData function', () => {
    const values = {transit: '000', account: 'WhyAdi', branch: 'branch'};
    const props = { email: 'bamtester13@gmail.com',values, nextStep() {},
    handleChange() {} };
    const wrapper = shallow(<Snapshot{...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().getData());
  });
});

// Budget Info?
describe('Testing prefliminfo function from budget_info: ', () => {
  it('Renders without crashing', () => {
    shallow(<Budget_Info />);
  });
});

// Dashboard page
describe('Testing Dashboard page: ', () => {
  it('Renders without crashing', () => {
    shallow(<DashboardPage />);
  });
});

// Reset page
describe('Testing reset page: ', () => {
  it('Renders without crashing', () => {
    shallow(<ResetPage />);
  });
});

// Terms and conditions page
describe('Testing terms and conditions page: ', () => {
  it('Renders without crashing', () => {
    shallow(<TermsAndConditionsPage />);
  });
});

// Login page
describe('Testing login page: ', () => {
  it('Renders without crashing', () => {
    shallow(<LoginPage />);
  });
});

/////////////////////// SUMMARY PAGE TEST SUITE /////////////////////

// SUMMARY page
describe('Testing Summary page: ', () => {
  it('Renders without crashing', () => {
    const values = {transit: '000', account: 'WhyAdi', branch: 'branch',
    annual: '1', province: 'ON', rent: '0', phone: '0', internet: '0', grocery: '0', 
    commute: '0', utility: '0', entertainment: '0'};
    const props = { values,
    handleChange() {}, provincial_tax() {}, federal_tax() {} };
    shallow(<BankInfo {...props}/>);
  });

  it('Testing continue function', () => {
    const values = {transit: '000', account: 'WhyAdi', branch: 'branch',
    annual: '1', province: 'ON', rent: '0', phone: '0', internet: '0', grocery: '0', 
    commute: '0', utility: '0', entertainment: '0'};
    function provincial_tax(a,b) {
      return([0,0]);
    }
    function federal_tax(a) {
      return([0,0]);
    }
    const props = { values, nextStep() {},
    handleChange() {}, provincial_tax, federal_tax};
    const wrapper = shallow(<Summary {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().continue(event));
  });
  it('Testing back function', () => {
    const values = {transit: '000', account: 'WhyAdi', branch: 'branch',
    annual: '1', province: 'ON', rent: '0', phone: '0', internet: '0', grocery: '0', 
    commute: '0', utility: '0', entertainment: '0'};
    function provincial_tax(a,b) {
      return([0,0]);
    }
    function federal_tax(a) {
      return([0,0]);
    }
    const props = { values, prevStep() {},
    handleChange() {}, provincial_tax, federal_tax};
    const wrapper = shallow(<Summary {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().back(event));
  });
  it('Testing reset function', () => {
    const values = {transit: '000', account: 'WhyAdi', branch: 'branch',
    annual: '1', province: 'ON', rent: '0', phone: '0', internet: '0', grocery: '0', 
    commute: '0', utility: '0', entertainment: '0'};
    function provincial_tax(a,b) {
      return([0,0]);
    }
    function federal_tax(a) {
      return([0,0]);
    }
    const props = { values, reset() {},
    handleChange() {}, provincial_tax, federal_tax};
    const wrapper = shallow(<Summary {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().reset(event));
  });
});


//////////////////// END SUMMARY PAGE TEST SUITE ////////////////////

// Sign up
describe('Testing sign up page: ', () => {
  it('Renders without crashing', () => {
    shallow(<SignUpPage />);
  });
});

//////////////////// PRELIM INFO PAGE TEST SUITE ////////////////////

// prelim info page
describe('Testing prelim info page: ', () => {
  it('Renders without crashing', () => {
    const values = {transit: '000', account: 'WhyAdi', branch: 'branch',
    annual: '1', province: 'ON', rent: '0', phone: '0', internet: '0', grocery: '0', 
    commute: '0', utility: '0', entertainment: '0'};
    const props = { values, nextStep() {},
    handleChange() {} };
    shallow(<PrelimInfo {...props}/>);
  });

  it('Testing continue function in preliminfo', () => {
    const values = {transit: '000', account: 'WhyAdi', branch: 'branch',
    annual: '1', province: 'ON', rent: '0', phone: '0', internet: '0', grocery: '0', 
    commute: '0', utility: '0', entertainment: '0'};
    const props = { values, nextStep() {},
    handleChange() {} };
    const wrapper = shallow(<PrelimInfo {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().continue(event));
  });

  it('Testing handleChange function', () => {
    const values = {transit: '000', account: 'WhyAdi', branch: 'branch',
    annual: '1', province: 'ON', rent: '0', phone: '0', internet: '0', grocery: '0', 
    commute: '0', utility: '0', entertainment: '0'};
    const props = { values, prevStep() {},
    handleChange() {} };
    const wrapper = shallow(<PrelimInfo {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange('Input')(event));
  });

  it('Testing handleSubmit function: WRONG ENTRY', () => {
    const values = {transit: '000', account: 'WhyAdi', branch: 'branch',
    annual: '1', province: 'ON', rent: '0', phone: '0', internet: '0', grocery: '0', 
    commute: '0', utility: '0', entertainment: '0'};
    const props = { values, prevStep() {},
    handleChange() {} };
    const wrapper = shallow(<PrelimInfo {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleSubmit(event));
  });

  it('Testing handleSubmit function: RIGHT ENTRY', () => {
    const values = {transit: '000', account: 'WhyAdi', branch: 'branch',
    annual: '1', province: 'ON', rent: '1', phone: '1', internet: '1', grocery: '1', 
    commute: '1', utility: '1', entertainment: '1'};
    const props = { values, prevStep() {}, nextStep() {},
    handleChange() {} ,email: "bamtester13@gmail.com"};
    const wrapper = shallow(<PrelimInfo {...props}/>);
    wrapper.setState({transit: '000', account: 'WhyAdi', branch: 'branch',
    annual: '1', province: 'ON', rent: '1', phone: '1', internet: '1', grocery: '1', 
    commute: '1', utility: '1', entertainment: '1'});
    wrapper.setState({transit: '00000', account: '0000000', branch: '000'});
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleSubmit(event));
  });
});


////////////////// END PRELIM INFO PAGE TEST SUITE //////////////////




// TEST DIFFERENT COMPONENTS

// Testing Success component
describe('Testing Success component: ', () => {
  it('Renders without crashing', () => {
    shallow(<Success />);
  });
});

// NAV BAR function from NavBar.js
describe('Testing the Nav Bar component: ', () => {
  it('Renders without crashing', () => {
    shallow(<AppBarExampleComposition />);
  });
});

////////////////////////// MENUNAV TEST SUITE /////////////////////////////

// Menu Nav function from MenuNav.js
describe('Testing the MenuNav component: ', () => {
  it('Renders without crashing', () => {
    shallow(<MenuNav />);
  });

  it('Test dash function', () => {
    const props = {dash() {}};
    const wrapper = shallow(<MenuNav {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().dash(event));;
  });

  it('Test bank function', () => {
    const props = {bank() {}};
    const wrapper = shallow(<MenuNav {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().bank(event));;
  });

  it('Test reset function', () => {
    const props = {reset() {}};
    const wrapper = shallow(<MenuNav {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().reset(event));;
  });

  it('Test home function', () => {
    const props = {home() {}};
    const wrapper = shallow(<MenuNav {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().home(event));;
  });

  it('Test finance function', () => {
    const props = {finance() {}};
    const wrapper = shallow(<MenuNav {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().finance(event));;
  });

  it('Test summary function', () => {
    const props = {summary() {}};
    const wrapper = shallow(<MenuNav {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().summary(event));;
  });

  it('Test terms function', () => {
    const props = {terms() {}};
    const wrapper = shallow(<MenuNav {...props}/>);
    const object = {preventDefault() {}};
    var event = new Event('Next');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().terms(event));;
  });

});
////////////////////// END MENUNAV TEST SUITE /////////////////////////////

//////////////////////// SIGNUP TEST SUITE ////////////////////////////////

// Sign up function from Signup.js
describe('Testing the Signup component: ', () => {
  it('Renders without crashing', () => {
    shallow(<SignUp />);
  });
  // test CORRECT EMAIL FORMAT FOR HANDLE CHANGE
  it('Testing handleChange function with CORRECT EMAIL', () => {
    const wrapper = shallow(<SignUp />);
    const object = {
      name: 'email',
      value: 'bamtester13@gmail.com',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });
  // TEST INCORRECT EMAIL FOR HANDLE CHANGE
  it('Testing handleChange function with INCORRECT EMAIL', () => {
    const wrapper = shallow(<SignUp />);
    const object = {
      name: 'email',
      value: 'bamtester13.gmail.com',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });

  // test CORRECT EMAIL FORMAT FOR HANDLE CHANGE
  it('Testing handleChange function with CORRECT FIRST NAME', () => {
    const wrapper = shallow(<SignUp />);
    const object = {
      name: 'firstName',
      value: 'Michael',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });
  // TEST INCORRECT EMAIL FOR HANDLE CHANGE
  it('Testing handleChange function with INCORRECT FIRST NAME', () => {
    const wrapper = shallow(<SignUp />);
    const object = {
      name: 'firstName',
      value: 'B',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });

  // test CORRECT EMAIL FORMAT FOR HANDLE CHANGE
  it('Testing handleChange function with CORRECT LAST NAME', () => {
    const wrapper = shallow(<SignUp />);
    const object = {
      name: 'lastName',
      value: 'Michael',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });
  // TEST INCORRECT EMAIL FOR HANDLE CHANGE
  it('Testing handleChange function with INCORRECT LAST NAME', () => {
    const wrapper = shallow(<SignUp />);
    const object = {
      name: 'lastName',
      value: 'B',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });

  // test CORRECT PASSWORD FORMAT FOR HANDLE CHANGE
  it('Testing handleChange function with CORRECT EMAIL', () => {
    const wrapper = shallow(<SignUp />);
    const object = {
      name: 'password',
      value: 'Bam123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });
  // TEST PASSWORD FOR HANDLE CHANGE
  it('Testing handleChange function with INCORRECT EMAIL', () => {
    const wrapper = shallow(<SignUp />);
    const object = {
      name: 'password',
      value: '123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });
  // TEST DEFAULT CASE
  it('Testing handleChange function with UNRECOGNIZED INPUT', () => {
    const wrapper = shallow(<SignUp />);
    const object = {
      name: 'why',
      value: '123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });

  // TESTING HANDLE SUBMIT with NULL EMAIL AND PASS
  it('Testing handleChange function with null EMAIL AND PASSWORD', () => {
    const wrapper = shallow(<SignUp />);
    wrapper.setState({ email: null, password: null });
    const object = {
      name: 'password',
      value: '123',
      email: 'bamtester13.gmail.com',
      password: 'Bam123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleSubmit(event));
  });

  // TESTING HANDLE SUBMIT WITH CORRECT EMAIL AND PASS
  it('Testing handleChange function with CORRECT EMAIL + PASSWORD', () => {
    const wrapper = shallow(<SignUp />);
    wrapper.setState({
      email: 'bamtester13@gmail.com',
      password: 'Bam123',
      firstName: 'Michael',
      lastName: 'Behr',
    });
    const object = {
      name: 'password',
      value: '123',
      email: 'bamtester13.gmail.com',
      password: 'Bam123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleSubmit(event));
  });

  // TESTING HANDLE SUBMIT WITH BAD FORM ERROR
  it('Testing handleChange function with CORRECT EMAIL + PASSWORD + BAD FORM ERROR', () => {
    const wrapper = shallow(<SignUp />);
    wrapper.setState({
      email: 'bamtester13@gmail.com',
      password: 'Bam123',
      firstName: 'Michael',
      lastName: 'Behr',
      formErrors: {
        email: 'bamtester13@gmail.com',
        password: 'Bam123',
        firstName: 'Michael',
        lastName: 'Behr',
      },
    });
    const object = {
      name: 'password',
      value: '123',
      email: 'bamtester13.gmail.com',
      password: 'Bam123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleSubmit(event));
  });

  it('TEST SWITCH TO LOGIN BUTTON FOR SIGNUP COMPONENT', () => {
    const props = { switchToLogin() {} };
    const wrapper = shallow(<SignUp {...props} />);
    const button = wrapper.find('#LoginButton');
    button.prop('onClick')();
  });

  it('TEST SWITCH TO REGISTER BUTTON FOR SIGNUP COMPONENT', () => {
    const props = { switchToRegister() {} };
    const wrapper = shallow(<SignUp {...props} />);
    const button = wrapper.find('#RegisterButton');
    button.prop('onClick')();
  });

  it('TEST SWITCH TO RESET BUTTON FOR SIGNUP COMPONENT', () => {
    const props = { switchToReset() {} };
    const wrapper = shallow(<SignUp {...props} />);
    const button = wrapper.find('#ResetButton');
    button.prop('onClick')();
  });
});

////////////////// END SIGNUP TEST SUITE /////////////////////////////////

////////////////// LOGIN TEST SUITE /////////////////////////////////

describe('Testing the Login component: ', () => {
  it('Initially renders without crashing', () => {
    shallow(<Login />);
  });
  // test CORRECT EMAIL FORMAT FOR HANDLE CHANGE
  it('Testing handleChange function with CORRECT EMAIL', () => {
    const wrapper = shallow(<Login />);
    const object = {
      name: 'email',
      value: 'bamtester13@gmail.com',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });
  // TEST INCORRECT EMAIL FOR HANDLE CHANGE
  it('Testing handleChange function with INCORRECT EMAIL', () => {
    const wrapper = shallow(<Login />);
    const object = {
      name: 'email',
      value: 'bamtester13.gmail.com',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });

  // test CORRECT PASSWORD FORMAT FOR HANDLE CHANGE
  it('Testing handleChange function with CORRECT EMAIL', () => {
    const wrapper = shallow(<Login />);
    const object = {
      name: 'password',
      value: 'Bam123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });
  // TEST PASSWORD FOR HANDLE CHANGE
  it('Testing handleChange function with INCORRECT EMAIL', () => {
    const wrapper = shallow(<Login />);
    const object = {
      name: 'password',
      value: '123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });
  // TEST DEFAULT CASE
  it('Testing handleChange function with UNRECOGNIZED INPUT', () => {
    const wrapper = shallow(<Login />);
    const object = {
      name: 'why',
      value: '123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });

  // TESTING HANDLE SUBMIT with NULL EMAIL AND PASS
  it('Testing handleChange function with null EMAIL AND PASSWORD', () => {
    const wrapper = shallow(<Login />);
    wrapper.setState({ email: null, password: null });
    const object = {
      name: 'password',
      value: '123',
      email: 'bamtester13.gmail.com',
      password: 'Bam123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleSubmit(event));
  });

  // TESTING HANDLE SUBMIT WITH CORRECT EMAIL AND PASS
  it('Testing handleChange function with CORRECT EMAIL + PASSWORD', () => {
    const wrapper = shallow(<Login />);
    wrapper.setState({
      email: 'bamtester13@gmail.com',
      password: 'Bam123',
    });
    const object = {
      name: 'password',
      value: '123',
      email: 'bamtester13.gmail.com',
      password: 'Bam123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleSubmit(event));
  });

  // TESTING HANDLE SUBMIT WITH BAD FORM ERROR
  it('Testing handleChange function with CORRECT EMAIL + PASSWORD + BAD FORM ERROR', () => {
    const wrapper = shallow(<Login />);
    wrapper.setState({
      email: 'bamtester13@gmail.com',
      password: 'Bam123',
      formErrors: {
        email: 'bamtester13@gmail.com',
        password: 'Bam123',
      },
    });
    const object = {
      name: 'password',
      value: '123',
      email: 'bamtester13.gmail.com',
      password: 'Bam123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleSubmit(event));
  });

  it('TEST SWITCH TO LOGIN BUTTON FOR LOGIN COMPONENT', () => {
    const props = { switchToLogin() {} };
    const wrapper = shallow(<Login {...props} />);
    const button = wrapper.find('#LoginButton');
    button.prop('onClick')();
  });

  it('TEST SWITCH TO REGISTER BUTTON FOR LOGIN COMPONENT', () => {
    const props = { switchToRegister() {} };
    const wrapper = shallow(<Login {...props} />);
    const button = wrapper.find('#RegisterButton');
    button.prop('onClick')();
  });

  it('TEST SWITCH TO RESET BUTTON FOR LOGIN COMPONENT', () => {
    const props = { switchToReset() {} };
    const wrapper = shallow(<Login {...props} />);
    const button = wrapper.find('#ResetButton');
    button.prop('onClick')();
  });
});

////////////////// END LOGIN TEST SUITE /////////////////////////////////

// Alert function from Alert.js
describe('Testing the Alert component: ', () => {
  it('Renders without crashing', () => {
    shallow(<Alert />);
  });
});

////////////////// BEGIN RESET TEST SUITE /////////////////////////////////

// Reset function from Reset.js
describe('Testing the Reset component: ', () => {
  it('Renders without crashing', () => {
    shallow(<Reset />);
  });
  // test CORRECT EMAIL FORMAT FOR HANDLE CHANGE
  it('Testing handleChange function with CORRECT EMAIL', () => {
    const wrapper = shallow(<Reset />);
    const object = {
      name: 'email',
      value: 'bamtester13@gmail.com',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });
  // TEST INCORRECT EMAIL FOR HANDLE CHANGE
  it('Testing handleChange function with INCORRECT EMAIL', () => {
    const wrapper = shallow(<Reset />);
    const object = {
      name: 'email',
      value: 'bamtester13.gmail.com',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });

  // test CORRECT PASSWORD FORMAT FOR HANDLE CHANGE
  it('Testing handleChange function with CORRECT EMAIL', () => {
    const wrapper = shallow(<Reset />);
    const object = {
      name: 'password',
      value: 'Bam123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });
  // TEST PASSWORD FOR HANDLE CHANGE
  it('Testing handleChange function with INCORRECT PASSWORD', () => {
    const wrapper = shallow(<Reset />);
    const object = {
      name: 'password',
      value: '123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });
  // TEST DEFAULT CASE
  it('Testing handleChange function with UNRECOGNIZED INPUT', () => {
    const wrapper = shallow(<Reset />);
    const object = {
      name: 'why',
      value: '123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange(event));
  });

  // TESTING HANDLE SUBMIT with NULL EMAIL AND PASS
  it('Testing handleChange function with null EMAIL AND PASSWORD', () => {
    const wrapper = shallow(<Reset />);
    wrapper.setState({ email: null, password: null });
    const object = {
      name: 'password',
      value: '123',
      email: 'bamtester13.gmail.com',
      password: 'Bam123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleSubmit(event));
  });

  // TESTING HANDLE SUBMIT WITH CORRECT EMAIL AND PASS
  it('Testing handleChange function with CORRECT EMAIL + PASSWORD', () => {
    const wrapper = shallow(<Reset />);
    wrapper.setState({
      email: 'bamtester13@gmail.com',
      password: 'Bam123',
    });
    const object = {
      name: 'password',
      value: '123',
      email: 'bamtester13.gmail.com',
      password: 'Bam123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleSubmit(event));
  });

  // TESTING HANDLE SUBMIT WITH BAD FORM ERROR
  it('Testing handleChange function with CORRECT EMAIL + PASSWORD + BAD FORM ERROR', () => {
    const wrapper = shallow(<Reset />);
    wrapper.setState({
      email: 'bamtester13@gmail.com',
      password: 'Bam123',
      formErrors: {
        email: 'bamtester13@gmail.com',
        password: 'Bam123',
      },
    });
    const object = {
      name: 'password',
      value: '123',
      email: 'bamtester13.gmail.com',
      password: 'Bam123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleSubmit(event));
  });

  it('TEST SWITCH TO LOGIN BUTTON FOR RESET COMPONENT', () => {
    const props = { switchToLogin() {} };
    const wrapper = shallow(<Reset {...props} />);
    const button = wrapper.find('#LoginButton');
    button.prop('onClick')();
  });

  it('TEST SWITCH TO REGISTER BUTTON FOR RESET COMPONENT', () => {
    const props = { switchToRegister() {} };
    const wrapper = shallow(<Reset {...props} />);
    const button = wrapper.find('#RegisterButton');
    button.prop('onClick')();
  });

  it('TEST SWITCH TO RESET BUTTON FOR RESET COMPONENT', () => {
    const props = { switchToReset() {} };
    const wrapper = shallow(<Reset {...props} />);
    const button = wrapper.find('#ResetButton');
    button.prop('onClick')();
  });
});

////////////////// END RESET TEST SUITE /////////////////////////////////

// Formvalid function from checkFormErrors.js
describe('Testing the formValid component: ', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<formValid />);
    const object = { a: 'hi' };
    //const instance = wrapper.instance();
    //expect(wrapper.state('formErrors')).toBe(true);
    expect(formValid(object)).toBe(false);
  });
  it('Renders without crashing', () => {
    const wrapper = shallow(<formValid />);
    const object = { a: '' };
    //const instance = wrapper.instance();
    //expect(wrapper.state('formErrors')).toBe(true);
    expect(formValid(object)).toBe(true);
  });
});

// RecentPurchases function from RecentPurchases.js
describe('Testing the RecentPurchases component: ', () => {
  it('Renders without crashing', () => {
    shallow(<RecentPurchases />);
  });
});

// SavingsContainer function from SavingsContainer.js
describe('Testing the SavingsContainer component: ', () => {
  it('Renders without crashing', () => {
    shallow(<SavingsContainer />);
  });

  it('Testing Calculate projection function', () => {
    const wrapper = shallow(<SavingsContainer />);
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().CalculateProjection(1000,0.05,12));
  });

  it('Testing handleChange function', () => {
    const wrapper = shallow(<SavingsContainer />);
    const object = {
      name: 'password',
      value: '123',
      email: 'bamtester13.gmail.com',
      password: 'Bam123',
      preventDefault() {},
    };
    var event = new Event('email');
    Object.defineProperty(event, 'target', {
      writable: false,
      value: object,
    });
    const { name, value } = event.target;
    //instance.simulate('click', { preventDefault() {} });
    expect(wrapper.instance().handleChange('Hi')(event));
  });

});