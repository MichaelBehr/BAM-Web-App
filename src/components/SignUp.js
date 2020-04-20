import React from 'react';
import './SignUp.css';
import logo from './BAM.png';
import firebase from '../components/firebaseConfig';
import Alert from './Alert';
import Success from './Success';
import formValid from './checkFormErrors.js';

// const formValid = formErrors => {
//   //if any value for the form error fields is > 0, set valid to false;
//   for (var key in Object(formErrors)) {
//     if (formErrors[key].length > 0) {
//       return false;
//     }
//   }

//   return true;
// };

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      errorAlert: false,
      errorMessage: '',
      successAlert: false,
      successMessage: '',
    };
  }

  handleChange = e => {
    e.preventDefault();

    //captures the field name and the value that was typed into the field
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    // pwd must contain one uppercase, one lowercase and a number
    const pwd_regex = RegExp('(?=.*?[0-9])(?=.*?[A-Za-z]).+');

    const email_regex = RegExp(
      /^[\w]+[.-]{0,1}[\w]+[@][\w]+[.][\w]{2,3}$/,
    );

    // check if all fields are formatted correctly
    switch (name) {
      case 'firstName':
        if (value.length < 2) {
          formErrors.firstName =
            'First name must be atleast 2 characters long.';
        } else {
          formErrors.firstName = '';
        }
        break;

      case 'lastName':
        if (value.length < 2) {
          formErrors.lastName =
            'Last name must be atleast 2 characters long.';
        } else {
          formErrors.lastName = '';
        }
        break;

      case 'email':
        if (!email_regex.test(value) || value.length < 0) {
          formErrors.email = 'Incorrect email format.';
        } else {
          formErrors.email = '';
        }
        break;

      case 'password':
        if (!pwd_regex.test(value)) {
          formErrors.password =
            'Password must contain one uppercase letter, one lowercase character and one number.';
        } else {
          formErrors.password = '';
        }
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
    // , () => console.log(this.state));
  };

  handleSubmit = async e => {
    e.preventDefault(); //Allows for form not to submit until form is completed

    const { firstName, lastName, email, password } = this.state;

    this.setState({ errorAlert: false });
    this.setState({ successAlert: false });

    // check if any fields are empty
    if (
      firstName == null ||
      lastName == null ||
      email == null ||
      password == null
    ) {
      this.setState({
        errorMessage: 'Error: Please fill in all the fields.',
      });
      this.setState({ errorAlert: true });
      return;
    }
    // check if all fields are filled correctly
    if (!formValid(this.state.formErrors)) {
      this.setState({
        errorMessage:
          'Error: Please enter your information correctly.',
      });
      this.setState({ errorAlert: true });
      return;
    }
    let currentComp = this;

    // sign up with the email and password
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(currentComp => {
        // console.log("VALID");
        this.setState({ errorAlert: false });
        this.setState({ successAlert: true });
        this.setState({
          successMessage: 'Success: Sign up completed.',
        });
        console.log('VALID');
        this.props.sendEmail(this.state.email);
        this.props.switchToPrelim(true);
        // this.props.disableSignUp(false);
      })
      .catch(function(error) {
        console.log('ERROR');
        currentComp.setState({ errorAlert: true });
        currentComp.setState({
          errorMessage:
            'Error: The email address is already in use by another account.',
        });
        // currentComp.props.parentCallback(false);
        return;
      });

    return;
  };

  render() {
    const { formErrors } = this.state;

    const msg = this.state.errorMessage;
    const msg_success = this.state.successMessage;

    return (
      <div className="container-wrapper">
        <div className="logo">
          <img src={logo} alt="BAM" height="200" width="350" />
        </div>
        <div className="toggleButton-signup">
          <button
            id="LoginButton"
            onClick={() => this.props.switchToLogin(true)}
          >
            Login
          </button>
          <div className="vertical-line"></div>
          <button
            id="RegisterButton"
            className="Register"
            onClick={() => this.props.switchToRegister(true)}
          >
            Register
          </button>
          <div className="vertical-line"></div>
          <button
            id="ResetButton"
            onClick={() => this.props.switchToReset(true)}
          >
            Reset Password
          </button>
        </div>
        <div className="form-wrapper-signup">
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="name">
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                  className={
                    formErrors.firstName.length > 0 ? 'error' : null
                  }
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMsgName">
                    {formErrors.firstName}
                  </span>
                )}
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className={
                    formErrors.lastName.length > 0 ? 'error' : null
                  }
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.lastName.length > 0 && (
                  <span className="errorMsgName">
                    {formErrors.lastName}
                  </span>
                )}
              </div>
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={
                  formErrors.email.length > 0 ? 'error' : null
                }
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMsg">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={
                  formErrors.password.length > 0 ? 'error' : null
                }
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMsg">
                  {formErrors.password}
                </span>
              )}
            </div>
            <div className="signUp">
              {this.state.successAlert ? (
                <Success message_success={msg_success}></Success>
              ) : null}
              {this.state.errorAlert ? (
                <Alert message={msg}></Alert>
              ) : null}
              <button type="submit">Click Here to Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
