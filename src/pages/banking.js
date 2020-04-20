import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../components/NavBar';
import Center from 'react-center';
import TextField from 'material-ui/TextField';
import { grey50, amber400 } from 'material-ui/styles/colors';
// import '../styling/userform.css';
import firebase from '../components/firebaseConfig';
import Alert from '../components/Alert';
import Success from '../components/Success';

export default class UpdateBankInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transit: '',
      branch: '',
      account: '',
      errorAlert: false,
      successAlert: false,
    };
  }

  handleSubmit = e => {
    if (
      this.state.transit.toString().length == 5 &&
      this.state.branch.toString().length == 3 &&
      this.state.account.toString().length == 7
    ) {
      var userEmail = this.props.email.replace('.', 'dot');
      var database = firebase.database();
      let userRef = database.ref('Users/' + userEmail);

      userRef.child('Banking Info').set({
        Transit: this.state.transit,
        Branch: this.state.branch,
        Account: this.state.account,
      });
      this.setState({ successAlert: true });
      this.setState({ errorAlert: false });
      return;
    } else {
      this.setState({ errorAlert: true });
      this.setState({ successAlert: false });
      return;
    }
  };

  handleChange = input => e => {
    e.preventDefault();
    this.setState({ [input]: e.target.value });
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar
            dash={this.props.dash}
            bank={this.props.bank}
            res={this.props.res}
            home={this.props.home}
            finance={this.props.finance}
            summary={this.props.summary}
            terms={this.props.terms}
          />
          <h1 className="bank_header">Update Banking Info?</h1>
          <div className="bank_container">
            <h4 className="header">Transit Number?</h4>
            <Center>
              <TextField
                floatingLabelText="Transit # should be 5 digits"
                floatingLabelFocusStyle={
                  styles.floatingLabelFocusStyle
                }
                floatingLabelStyle={styles.floatingLabelStyle}
                underlineFocusStyle={styles.underlineStyle}
                onChange={this.handleChange('transit')}
              />
            </Center>
            <h4 className="header">Financial Institution Number?</h4>
            <Center>
              <TextField
                floatingLabelText="Branch # should be 3 digits"
                floatingLabelFocusStyle={
                  styles.floatingLabelFocusStyle
                }
                floatingLabelStyle={styles.floatingLabelStyle}
                underlineFocusStyle={styles.underlineStyle}
                onChange={this.handleChange('branch')}
              />
            </Center>
            <h4 className="header">Account Number?</h4>
            <Center>
              <TextField
                floatingLabelText="Account # should be 7 digits"
                floatingLabelFocusStyle={
                  styles.floatingLabelFocusStyle
                }
                floatingLabelStyle={styles.floatingLabelStyle}
                underlineFocusStyle={styles.underlineStyle}
                onChange={this.handleChange('account')}
              />
            </Center>
          </div>
          <Center>
            {this.state.errorAlert ? (
              <Alert message="Error: You have entered your information incorrectly. Please try again."></Alert>
            ) : null}
            {this.state.successAlert ? (
              <Success message_success="Success: Information has been updated."></Success>
            ) : null}
          </Center>
          <Center>
            <RaisedButton
              label="Submit"
              primary={true}
              onClick={this.handleSubmit}
              style={styles.button}
            />
          </Center>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },

  floatingLabelStyle: {
    color: grey50,
  },

  underlineStyle: {
    borderColor: amber400,
  },

  button: {
    margin: 15,
  },
};
