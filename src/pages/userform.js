import React, { Component } from 'react';
import PrelimInfo from './prelim_info';
import Confirm from './summary';
import Bank_Info from './bank_info';
import '../styling/userform.css';
import firebase from '../components/firebaseConfig';

export default class UserForm extends Component {
  state = {
    step: 1,
    annual: '',
    province: '',
    rent: '',
    internet: '',
    phone: '',
    grocery: '',
    commute: '',
    utility: '',
    entertainment: '',
    transit: '',
    branch: '',
    account: '',
    p_designation: '',
    provincial_tax: '',
    f_designation: '',
    federal_tax: '',
  };

  // METHODS

  monthly_income = () => {
    const yearly_income = this.state.annual;
    const f_tax = this.state.federal_tax;
    const p_tax = this.state.provincial_tax;

    const total_tax = parseFloat(f_tax) + parseFloat(p_tax);

    const ret_val =
      (parseFloat(yearly_income) - parseFloat(total_tax)) / 12;

    console.log(ret_val);

    return ret_val;
  };

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state; //using destructuring - unpack values from arrays/properties from objects and store into distinct variables
    this.setState({
      step: step + 1,
    });
    console.log('Step value is - ', step);
  };

  //Proceed to previous step
  prevStep = () => {
    const { step } = this.state; //using destructuring - unpack values from arrays/properties from objects and store into distinct variables
    this.setState({
      step: step - 1,
    });
  };

  // upload data to firebase
  submitToFB = async childData => {
    console.log('GOT EMAIL - ', childData);
    console.log(this.state);
    var email = childData.replace('.', 'dot');
    var database = firebase.database();
    let userRef = database.ref('Users/' + email);

    userRef.child('Personal Info').set({
      Prov_code: this.state.province,
      Email: childData,
    });

    userRef.child('Banking Info').set({
      Transit: this.state.transit,
      Branch: this.state.branch,
      Account: this.state.account,
    });

    const monthly_takehome = this.monthly_income();
    const total_tax =
      parseFloat(this.state.provincial_tax) +
      parseFloat(this.state.federal_tax);

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

    this.props.switchToExistingUser(true);
    return;
  };

  reset = () => {
    this.setState({
      step: 1,
      annual: '',
      province: '',
      rent: '',
      internet: '',
      phone: '',
      grocery: '',
      commute: '',
      utility: '',
      entertainment: '',
      transit: '',
      branch: '',
      account: '',
      p_designation: 'Not applicable',
      provincial_tax: '',
      f_designation: 'Not Applicable',
      federal_tax: '',
    });
  };

  // Handle fields change --> this is a generalized change handler which handles update for all form fields!
  handleChange = (input, val) => {
    //using arrow functions with event parameter. Here, input is a parameter of function (no parentheses needed for one parameter)
    console.log(input);
    this.setState({ [input]: val }); //same as -> this.setState({ [event.target.name]: event.target.value })
  };

  federal_tax = (f_desig, f_tax) => {
    this.setState({ f_designation: f_desig });
    this.setState({ federal_tax: f_tax });
  };

  provincial_tax = (p_desig, p_tax) => {
    this.setState({ p_designation: p_desig });
    this.setState({ provincial_tax: p_tax });
  };

  render() {
    const {
      step,
      annual,
      province,
      rent,
      internet,
      phone,
      grocery,
      commute,
      utility,
      entertainment,
      transit,
      branch,
      account,
      hobby,
      p_designation,
      provincial_tax,
      f_designation,
      federal_tax,
    } = this.state; //Destructuring
    const values = {
      annual,
      province,
      rent,
      internet,
      phone,
      grocery,
      commute,
      utility,
      entertainment,
      transit,
      branch,
      account,
      hobby,
      p_designation,
      provincial_tax,
      f_designation,
      federal_tax,
    }; // values user can adjust

    // console.log(values);

    const userEmail = this.props.email;
    // const userEmail = 'saf@gmail.com';

    switch (step) {
      case 1:
        return (
          <PrelimInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <Bank_Info
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <div>
            {console.log(values)}
            <Confirm
              provincial_tax={this.provincial_tax}
              federal_tax={this.federal_tax}
              nextStep={this.submitToFB}
              prevStep={this.prevStep}
              reset={this.reset}
              values={values}
              email={userEmail}
            />
          </div>
        );

      case 4:
    }
  }
}
