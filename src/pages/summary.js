import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../components/NavBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Center from 'react-center';
// import '../styling/userform.css';
import provincial_tax_bracket from '../components/province_tax';
import federal_tax_bracket from '../components/federal_tax';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      annual: this.props.values.annual,
      province: this.props.values.province,
      rent: this.props.values.rent,
      internet: this.props.values.internet,
      phone: this.props.values.phone,
      grocery: this.props.values.grocery,
      commute: this.props.values.commute,
      utility: this.props.values.utility,
      entertainment: this.props.values.entertainment,
      transit: this.props.values.transit,
      branch: this.props.values.branch,
      account: this.props.values.account,
      p_designation: this.props.values.p_designation,
      provincial_tax: this.props.values.provincial_tax,
      f_designation: this.props.values.f_designation,
      federal_tax: this.props.values.federal_tax,
    };
  }

  reset = e => {
    e.preventDefault();
    this.setState({
      step: 1,
      annual: 0,
      province: '',
      rent: 0,
      internet: 0,
      phone: 0,
      grocery: 0,
      commute: 0,
      utility: 0,
      entertainment: 0,
      transit: 0,
      branch: 0,
      account: 0,
      p_designation: 'Not applicable',
      provincial_tax: 0,
      f_designation: 'Not applicable',
      federal_tax: 0,
    });
    this.props.reset();
  };

  componentDidMount() {
    this.updateTax();
  }

  updateTax() {
    const f_tax_data = federal_tax_bracket(this.state.annual);

    const p_tax_data = provincial_tax_bracket(
      this.state.annual,
      this.state.province,
    );

    const first = p_tax_data[0];
    const second = p_tax_data[1];
    const third = f_tax_data[0];
    const fourth = f_tax_data[1];

    console.log(
      p_tax_data[0],
      p_tax_data[1],
      f_tax_data[0],
      f_tax_data[1],
    );

    this.setState({ p_designation: first });
    this.setState({ provincial_tax: second });
    this.setState({ f_designation: third });
    this.setState({ federal_tax: fourth });

    this.props.provincial_tax(first, second);
    this.props.federal_tax(third, fourth);
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep(this.props.email);
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      //only one item can be output using return function --> use fragment to return multiple things!
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar />
          <br />
          <h1 className="caption">Verify Information</h1>
          <Center>
            <div className="sizing">
              <Center>
                <div className="container2">
                  <List className="left">
                    <ListItem
                      className="header"
                      primaryText="Annual Salary"
                      secondaryText={'$' + this.state.annual}
                    />

                    <ListItem
                      className="header"
                      primaryText="Province"
                      secondaryText={this.state.province
                        .toUpperCase()
                        .replace(/\s+/g, '')}
                    />

                    <ListItem
                      className="header"
                      primaryText="Provincial Tax-Bracket Designation"
                      secondaryText={this.state.p_designation}
                    />

                    <ListItem
                      className="header"
                      primaryText="Annual Provincial Taxes"
                      secondaryText={'$' + this.state.provincial_tax}
                    />

                    <ListItem
                      className="header"
                      primaryText="Federal Tax-Bracket Designation"
                      secondaryText={this.state.f_designation}
                    />

                    <ListItem
                      className="header"
                      primaryText="Annual Federal Taxes"
                      secondaryText={'$' + this.state.federal_tax}
                    />
                  </List>
                  <List className="right">
                    <ListItem
                      className="header"
                      primaryText="Transit Number"
                      secondaryText={this.state.transit}
                    />

                    <ListItem
                      className="header"
                      primaryText="Financial Institution Number"
                      secondaryText={this.state.branch}
                    />

                    <ListItem
                      className="header"
                      primaryText="Account Number"
                      secondaryText={this.state.account}
                    />
                  </List>
                  <List className="middle">
                    <ListItem
                      className="header"
                      primaryText="Monthly Rent"
                      secondaryText={'$' + this.state.rent}
                    />
                    <ListItem
                      className="header"
                      primaryText="Monthly Internet Bill"
                      secondaryText={'$' + this.state.internet}
                    />
                    <ListItem
                      className="header"
                      primaryText="Monthly Phone Bill"
                      secondaryText={'$' + this.state.phone}
                    />
                    <ListItem
                      className="header"
                      primaryText="Monthly Grocery Bill"
                      secondaryText={'$' + this.state.grocery}
                    />
                    <ListItem
                      className="header"
                      primaryText="Monthly Commute Bill"
                      secondaryText={'$' + this.state.commute}
                    />
                    <ListItem
                      className="header"
                      primaryText="Monthly Utility Bill"
                      secondaryText={'$' + this.state.utility}
                    />
                    <ListItem
                      className="header"
                      primaryText="Monthly Entertainment Bill"
                      secondaryText={'$' + this.state.entertainment}
                    />
                  </List>
                </div>
              </Center>
            </div>
          </Center>

          <Center>
            <RaisedButton
              label="Reset"
              primary={false}
              style={styles.button}
              onClick={this.reset}
            />
            <RaisedButton
              label="Confirm & Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
            <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.back}
            />
          </Center>
        </React.Fragment>
      </MuiThemeProvider>
    ); //fragment allows a list of children to be grouped without adding extra nodes to DOM
  }
}

const styles = {
  button: {
    margin: 15,
  },
};
