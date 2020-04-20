import React from 'react';
import './Login.css';
import logo from './BAM.png';
import firebase from '../components/firebaseConfig';
import Alert from './Alert';
import Success from './Success';
import formValid from './checkFormErrors.js';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      formErrors: {
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
  };

  handleSubmit = async e => {
    e.preventDefault(); //Allows for form not to submit until form is completed

    this.setState({ errorAlert: false });
    this.setState({ successAlert: false });

    const { email, password } = this.state;
    // check if any fields are empty
    if (email == null || password == null) {
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

    // login with the email and password
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(currentComp => {
        console.log('VALID');
        this.setState({ errorAlert: false });
        this.setState({ successAlert: true });
        this.setState({
          successMessage: 'Success: Sign in successful!',
        });

        this.props.sendEmail(this.state.email);
        this.props.switchToExistingUser(true);

        return;
      })
      .catch(function(error) {
        console.log('ERROR');
        console.log(error);
        var errorCode = error.code;
        if (errorCode === 'auth/wrong-password') {
          currentComp.setState({ errorAlert: true });
          currentComp.setState({
            errorMessage:
              'Error: You have entered the wrong password, please try again.',
          });
        }

        if (errorCode === 'auth/user-not-found') {
          currentComp.setState({ errorAlert: true });
          currentComp.setState({
            errorMessage: 'Error: No account exists with this email.',
          });
        }
        return;
      });
  };

  render() {
    const { formErrors } = this.state;

    const msg = this.state.errorMessage;
    const msg_success = this.state.successMessage;

    return (
      <div className="container-wrapper">
        <img className="logo" src={logo} alt="BAM" />
        <div className="toggleButton-login">
          <button
            id="LoginButton"
            className="Login"
            onClick={() => this.props.switchToLogin(true)}
          >
            Login
          </button>
          <div className="vertical-line"></div>
          <button
            id="RegisterButton"
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
        <div className="form-wrapper-login">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit} noValidate>
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
            {this.state.successAlert ? (
              <Success message_success={msg_success}></Success>
            ) : null}
            {this.state.errorAlert ? (
              <Alert message={msg}></Alert>
            ) : null}
            <div className="Login">
              <button type="submit">Click Here to Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
