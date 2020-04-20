import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from '../components/NavBar';
import Center from 'react-center';
import Mood from 'material-ui/svg-icons/social/mood';
import { grey50, amber400 } from 'material-ui/styles/colors';
import '../styling/userform.css';
import firebase from '../components/firebaseConfig';
import Alert from '../components/Alert';
import Success from '../components/Success';
import provincial_tax_bracket from '../components/province_tax';
import federal_tax_bracket from '../components/federal_tax';

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
      p_designation: '',
      provincial_tax: '',
      f_designation: '',
      federal_tax: '',
      errorAlert: false,
      successAlert: false,
    };
  }

  monthly_income = () => {
    const yearly_income = this.state.annual;
    const f_tax = this.state.federal_tax;
    const p_tax = this.state.provincial_tax;

    const total_tax = f_tax + p_tax;

    const ret_val =
      (parseFloat(yearly_income) - parseFloat(total_tax)) / 12;

    console.log(ret_val);

    return ret_val;
  };

  calc_total_tax = () => {
    const p_tax = provincial_tax_bracket(
      this.state.annual,
      this.state.province,
    );

    const f_tax = federal_tax_bracket(this.state.annual);

    this.setState({ p_designation: p_tax[0] });
    this.setState({ provincial_tax: p_tax[1] });
    this.setState({ f_designation: f_tax[0] });
    this.setState({ federal_tax: f_tax[1] });

    const ret_val = parseFloat(p_tax[1]) + parseFloat(f_tax[1]);

    return ret_val;
  };

  handleChange = input => e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    const rgx_prov = RegExp(
      '(^(AB)$)|(^(BC)$)|(^(MB)$)|(^(NB)$)|(^(NL)$)|(^(NS)$)|(^(NT)$)|(^(NU)$)|(^(ON)$)|(^(PE)$)|(^(QC)$)|(^(SK)$)|(^(NB)$)|(^(YT)$)',
    );
    const rgx = RegExp('^[0-9]+$');

    if (!rgx_prov.test(this.state.province)) {
      this.setState({ errorAlert: true });
      this.setState({ successAlert: false });
    }

    if (
      !rgx.test(this.state.annual) ||
      !rgx.test(this.state.rent) ||
      !rgx.test(this.state.internet) ||
      !rgx.test(this.state.phone) ||
      !rgx.test(this.state.grocery) ||
      !rgx.test(this.state.commute) ||
      !rgx.test(this.state.utility) ||
      !rgx.test(this.state.entertainment)
    ) {
      this.setState({ errorAlert: true });
      this.setState({ successAlert: false });
    } else {
      var userEmail = this.props.email.replace('.', 'dot');
      var database = firebase.database();
      let userRef = database.ref('Users/' + userEmail);

      userRef.child('Personal Info').set({
        Prov_code: this.state.province,
      });

      const total_tax = this.calc_total_tax();
      const monthly_takehome = this.monthly_income();

      userRef
        .child('Financial Profile')
        .child('Income Info')
        .set({
          Annual: this.state.annual,
          Monthly_take_home: monthly_takehome,
          Total_tax: total_tax,
          Provincial_designation: this.state.p_designation,
          Provincial_tax: this.state.provincial_tax,
          Federal_designation: this.state.f_designation,
          Federal_tax: this.state.federal_tax,
        });

      userRef
        .child('Financial Profile')
        .child('Monthly Expenses')
        .set({
          Commute: this.state.commute,
          Entertainment: this.state.entertainment,
          Groceries: this.state.grocery,
          Internet: this.state.internet,
          Phone: this.state.phone,
          Rent: this.state.rent,
          Utility: this.state.utility,
        });
      this.setState({ successAlert: true });
      this.setState({ errorAlert: false });
    }
  };

  render() {
    return (
      //only one item can be output using return function --> use fragment to return multiple things!
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
          <h1 className="header"> Update Budget Info</h1>
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
                // defaultValue = {values.province.toUpperCase().replace(/\s+/g, '') }
              />
              {/* {this.state.formErrorMsg.length > 0 && (
                <span className="errorMsg">
                  {this.state.formErrorsMsg}
                </span>
              )} */}
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
                  //   defaultValue = {values.annual}
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
                  //   defaultValue = {values.rent}
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
                  //   defaultValue = {values.internet}
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
                  //   defaultValue = {values.phone}
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
                  //   defaultValue = {values.grocery}
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
                  //   defaultValue = {values.commute}
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
                  //   defaultValue = {values.utility}
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
                  //   defaultValue = {values.entertainment}
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
              label="Submit"
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
