import React from 'react';
// import './Mainpage.css';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import Reset from '../components/Reset';
import UserForm from './userform';
import Existing from './existinguser';
import Dashboard from './dashboard';

class Mainpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      showLogin: true,
      showRegister: false,
      showReset: false,
      isNewUser: false,
      isExistingUser: false,
    };
  }

  switchToLoginCallback = childData => {
    this.setState({
      showLogin: childData,
      showRegister: false,
      showReset: false,
    });
  };

  switchToRegisterCallback = childData => {
    this.setState({
      showLogin: false,
      showRegister: childData,
      showReset: false,
    });
  };

  switchToResetCallback = childData => {
    this.setState({
      showLogin: false,
      showRegister: false,
      showReset: childData,
    });
  };

  switchToPrelimCallback = childData => {
    this.setState({
      showLogin: false,
      showRegister: false,
      showReset: false,
      isNewUser: childData,
    });
  };

  switchToExistingUserCallback = childData => {
    this.setState({
      showLogin: false,
      showRegister: false,
      showReset: false,
      isNewUser: false,
      isExistingUser: childData,
    });
  };

  setEmail = childData => {
    this.setState({
      email: childData,
    });
  };

  render() {
    return (
      <div>
        {this.state.showRegister ? (
          <SignUp
            switchToLogin={this.switchToLoginCallback}
            switchToRegister={this.switchToRegisterCallback}
            switchToReset={this.switchToResetCallback}
            switchToPrelim={this.switchToPrelimCallback}
            sendEmail={this.setEmail}
          />
        ) : null}
        {this.state.showLogin ? (
          <Login
            switchToLogin={this.switchToLoginCallback}
            switchToRegister={this.switchToRegisterCallback}
            switchToReset={this.switchToResetCallback}
            switchToExistingUser={this.switchToExistingUserCallback}
            sendEmail={this.setEmail}
          />
        ) : null}
        {this.state.showReset ? (
          <Reset
            switchToLogin={this.switchToLoginCallback}
            switchToRegister={this.switchToRegisterCallback}
            switchToReset={this.switchToResetCallback}
          />
        ) : null}
        {this.state.isNewUser ? (
          <UserForm
            email={this.state.email}
            switchToExistingUser={this.switchToExistingUserCallback}
          />
        ) : null}

        {this.state.isExistingUser ? (
          <Existing email={this.state.email} />
        ) : null}
      </div>
    );
  }
}

export default Mainpage;
