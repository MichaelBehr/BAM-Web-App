import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import AppBar from '../components/NavBar';
import AppBar from 'material-ui/AppBar';
import Center from 'react-center';
import Mood from 'material-ui/svg-icons/social/mood';
import { grey50, amber400 } from 'material-ui/styles/colors';
import '../styling/userform.css';
import Alert from '../components/Alert';
import Success from '../components/Success';

export default class PrelimInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      annual: '',
      province: '',
      rent: '',
      internet: '',
      phone: '',
      grocery: '',
      commute: '',
      utility: '',
      entertainment: '',
      errorAlert: false,
      successAlert: false,
    };
  }

  continue() {
    this.props.nextStep();
  }

  handleChange = input => e => {
    e.preventDefault();
    // console.log(input);
    this.props.handleChange(input, e.target.value);
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ errorAlert: false });
    this.setState({ successAlert: false });

    const rgx_prov = RegExp(
      '(^(AB)$)|(^(BC)$)|(^(MB)$)|(^(NB)$)|(^(NL)$)|(^(NS)$)|(^(NT)$)|(^(NU)$)|(^(ON)$)|(^(PE)$)|(^(QC)$)|(^(SK)$)|(^(NB)$)|(^(YT)$)',
    );
    const rgx = RegExp('^[0-9]+$');
    if (
      rgx_prov.test(this.state.province) &&
      rgx.test(this.state.annual) &&
      rgx.test(this.state.rent) &&
      rgx.test(this.state.internet) &&
      rgx.test(this.state.phone) &&
      rgx.test(this.state.grocery) &&
      rgx.test(this.state.commute) &&
      rgx.test(this.state.utility) &&
      rgx.test(this.state.entertainment)
    ) {
      this.setState({ errorAlert: false });
      this.setState({ successAlert: true });
      this.continue();
      return;
    } else {
      this.setState({ successAlert: false });
      this.setState({ errorAlert: true });
      return;
    }
  };

  render() {
    const values = this.props;
    return (
      //only one item can be output using return function --> use fragment to return multiple things!
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar/>
          <h1 className="header">
            {' '}
            Hey there, welcome to BAM! <Mood />
          </h1>
          <h3 className="caption">
            We're thrilled to have you on our platform! Let's get to
            know you:
          </h3>
          <div className="province_layer">
            <h4 className="top_header">Province? </h4>
            <Center>
              <TextField
                floatingLabelText="Please use postal abbrev. (Ex. ON)"
                floatingLabelFocusStyle={
                  styles.floatingLabelFocusStyle
                }
                floatingLabelStyle={styles.floatingLabelStyle}
                underlineFocusStyle={styles.underlineStyle}
                onChange={this.handleChange('province')}
              />
            </Center>
          </div>
          <div className="container">
            <div className="one">
              <h4 className="header">Annual Salary?</h4>
              <Center>
                <TextField
                  floatingLabelText='Alexa, play "Money" song by Abba'
                  floatingLabelFocusStyle={
                    styles.floatingLabelFocusStyle
                  }
                  floatingLabelStyle={styles.floatingLabelStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  onChange={this.handleChange('annual')}
                />
              </Center>
            </div>
            <div className="two">
              <h4 className="header">Monthly Rent/Mortgage?</h4>
              <Center>
                <TextField
                  floatingLabelText="Is a condo really worth this much?"
                  floatingLabelFocusStyle={
                    styles.floatingLabelFocusStyle
                  }
                  floatingLabelStyle={styles.floatingLabelStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  onChange={this.handleChange('rent')}
                />
              </Center>
            </div>
            <div className="three">
              <h4 className="header">Monthly Internet Bill?</h4>
              <Center>
                <TextField
                  floatingLabelText="Ahh, modern generation socializing"
                  floatingLabelFocusStyle={
                    styles.floatingLabelFocusStyle
                  }
                  floatingLabelStyle={styles.floatingLabelStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  onChange={this.handleChange('internet')}
                />
              </Center>
            </div>
            <div className="four">
              <h4 className="header">Monthly Phone Bill?</h4>
              <Center>
                <TextField
                  floatingLabelText="Yikes - ever considered Whatsapp?"
                  floatingLabelFocusStyle={
                    styles.floatingLabelFocusStyle
                  }
                  floatingLabelStyle={styles.floatingLabelStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  onChange={this.handleChange('phone')}
                />
              </Center>
            </div>
            <div className="five">
              <h4 className="header">Monthly Grocery Bill?</h4>
              <Center>
                <TextField
                  floatingLabelText="Geez, that bill better feed a family"
                  floatingLabelFocusStyle={
                    styles.floatingLabelFocusStyle
                  }
                  floatingLabelStyle={styles.floatingLabelStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  onChange={this.handleChange('grocery')}
                />
              </Center>
            </div>
            <div className="six">
              <h4 className="header">Monthly Commute Bill?</h4>
              <Center>
                <TextField
                  floatingLabelText="Trust me - Indian traffic is the worst"
                  floatingLabelFocusStyle={
                    styles.floatingLabelFocusStyle
                  }
                  floatingLabelStyle={styles.floatingLabelStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  onChange={this.handleChange('commute')}
                />
              </Center>
            </div>
            <div className="seven">
              <h4 className="header">Monthly Utility Bill?</h4>
              <Center>
                <TextField
                  floatingLabelText="Why are you using so much water?"
                  floatingLabelFocusStyle={
                    styles.floatingLabelFocusStyle
                  }
                  floatingLabelStyle={styles.floatingLabelStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  onChange={this.handleChange('utility')}
                />
              </Center>
            </div>
            <div className="eight">
              <h4 className="header">Monthly Entertainment Bill?</h4>
              <Center>
                <TextField
                  floatingLabelText="Work hard, party hard (not too hard)"
                  floatingLabelFocusStyle={
                    styles.floatingLabelFocusStyle
                  }
                  floatingLabelStyle={styles.floatingLabelStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  onChange={this.handleChange('entertainment')}
                />
              </Center>
            </div>
          </div>
          <br />
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
              label="Continue"
              primary={true}
              onClick={this.handleSubmit}
            />
          </Center>
          <br />
        </React.Fragment>
      </MuiThemeProvider>
    ); //fragment allows a list of children to be grouped without adding extra nodes to DOM
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
};
