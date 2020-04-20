import React from 'react';
import './Reset.css';
import logo from './BAM.png';
import firebase from '../components/firebaseConfig';
import Alert from './Alert';
import Success from './Success';
import formValid from './checkFormErrors.js';

class Reset extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: '',
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

    const email_regex = RegExp(
      /^[\w]+[.-]{0,1}[\w]+[@][\w]+[.][\w]{2,3}$/,
    );

    // check if field are formatted correctly
    if (!email_regex.test(value) || value.length < 0) {
      formErrors.email = 'Incorrect email format.';
    } else {
      formErrors.email = '';
    }

    this.setState({ formErrors, [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault(); //Allows for form not to submit until form is completed

    const { email } = this.state;

    this.setState({ errorAlert: false });
    this.setState({ successAlert: false });

    // check if any fields are empty
    if (email == null) {
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
      .sendPasswordResetEmail(email)
      .then(currentComp => {
        console.log('VALID');
        this.setState({ errorAlert: false });
        this.setState({ successAlert: true });
        this.setState({
          successMessage:
            'Success: Please check your email for password reset link.',
        });
        // this.props.parentCallback(true);
        // this.props.disableSignUp(false);
        return;
      })
      .catch(function(error) {
        console.log('ERROR');
        var errorCode = error.code;

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
        <div className="toggleButton-reset">
          <button
            id="LoginButton"
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
            className="resetPassword"
            onClick={() => this.props.switchToReset(true)}
          >
            Reset Password
          </button>
        </div>
        <div className="form-wrapper-reset">
          <h1>Reset Password</h1>
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
            {this.state.successAlert ? (
              <Success message_success={msg_success}></Success>
            ) : null}
            {this.state.errorAlert ? (
              <Alert message={msg}></Alert>
            ) : null}
            <div className="reset">
              <button type="submit">
                Click Here to Reset Your Password
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Reset;
