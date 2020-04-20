import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../components/NavBar';
import Center from 'react-center';
import TextField from 'material-ui/TextField';
import { grey50, amber400 } from 'material-ui/styles/colors';
// import '../styling/userform.css';
import Alert from '../components/Alert';
import Success from '../components/Success';

export default class BankInfo extends Component {
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

  continue() {
    this.props.nextStep();
  }

  handleChange = input => e => {
    e.preventDefault();
    this.props.handleChange(input, e.target.value);
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ errorAlert: false });
    this.setState({ successAlert: false });

    const rgx = RegExp('^[0-9]+$');

    if (
      this.state.transit.toString().length == 5 &&
      this.state.branch.toString().length == 3 &&
      this.state.account.toString().length == 7 &&
      rgx.test(this.state.transit) &&
      rgx.test(this.state.branch) &&
      rgx.test(this.state.account)
    ) {
      this.setState({ successAlert: true });
      this.setState({ errorAlert: false });
      this.continue();
      return;
    } else {
      this.setState({ errorAlert: true });
      this.setState({ successAlert: false });

      return;
    }
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    // const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar />
          <h1 className="bank_header">Banking Details?</h1>
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
                // defaultValue={values.transit}
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
                // defaultValue={values.branch}
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
                // defaultValue={values.account}
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
              label="Back"
              primary={false}
              onClick={this.back}
              style={styles.button}
            />
            <RaisedButton
              label="Continue"
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
