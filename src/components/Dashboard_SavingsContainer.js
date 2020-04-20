import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import { grey50 } from 'material-ui/styles/colors';
import SavingsProjection from '../components/Dashboard_SavingsProjection';

class SavingsContainer extends Component {

  state = {
    principal:1000,
    interest:1,
    period: 365,
    one:0,
    five: 0,
    ten: 0,
    twenty: 0,
    forty: 0,
  };

  CalculateProjection = (principal, interest, period) => {
    var ek = principal * Math.pow(1 + ((interest/100)/period), period * 1)
    var dos = principal * Math.pow(1 + ((interest/100)/period), period * 5)
    var theen = principal * Math.pow(1 + ((interest/100)/period), period * 10)
    var char = principal * Math.pow(1 + ((interest/100)/period), period * 20)
    var panch = principal * Math.pow(1 + ((interest/100)/period), period * 40)

    this.setState({
      one: parseFloat(ek).toFixed(2),
      five: parseFloat(dos).toFixed(2),
      ten: parseFloat(theen).toFixed(2),
      twenty: parseFloat(char).toFixed(2),
      forty: parseFloat(panch).toFixed(2)
    });
  }

  handleChange = input => e => {
    //using arrow functions with event parameter. Here, input is a parameter of function (no parentheses needed for one parameter)
    this.setState({ [input]: e.target.value }); //same as -> this.setState({ [event.target.name]: event.target.value })
  };

  render() {
    const {principal, interest, period, one,five,ten,twenty,forty} = this.state;
    const items = {principal, interest, period,one,five,ten,twenty,forty};
    return (
      <React.Fragment>
          <SavingsProjection
            items = {items}
            CalculateProjection = {this.CalculateProjection}
            handleChange = {this.handleChange}
          />
      </React.Fragment>
    );
  }
}

export default SavingsContainer;
