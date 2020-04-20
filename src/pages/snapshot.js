import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../components/NavBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Center from 'react-center';
// import '../styling/userform.css';
import firebase from '../components/firebaseConfig';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      annual: 0,
      province: 0,
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
      p_designation: 0,
      provincial_tax: 0,
      f_designation: 0,
      federal_tax: 0,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const userEmail = this.props.email.replace('.', 'dot');
    var database = firebase.database();
    let userRef = database
      .ref('Users/')
      .child(userEmail)
      .child('Financial Profile')
      .child('Income Info');

    const currentComp = this;
    userRef.on('value', function(snapshot) {
      currentComp.setState({
        annual: parseInt(snapshot.val().Annual),
      });
      currentComp.setState({
        federal_tax: parseFloat(snapshot.val().Federal_tax).toFixed(
          2,
        ),
      });
      currentComp.setState({
        provincial_tax: parseFloat(
          snapshot.val().Provincial_tax,
        ).toFixed(2),
      });
      currentComp.setState({
        provincial_designation: snapshot.val().Provincial_designation,
      });
      currentComp.setState({
        federal_designation: snapshot.val().Federal_designation,
      });
    });

    userRef = database
      .ref('Users/')
      .child(userEmail)
      .child('Financial Profile')
      .child('Monthly Expenses');

    userRef.on('value', function(snapshot) {
      currentComp.setState({
        commute: parseInt(snapshot.val().Commute),
      });
      currentComp.setState({
        entertainment: parseInt(snapshot.val().Entertainment),
      });
      currentComp.setState({
        grocery: parseInt(snapshot.val().Groceries),
      });
      currentComp.setState({
        internet: parseInt(snapshot.val().Internet),
      });
      currentComp.setState({
        phone: parseInt(snapshot.val().Phone),
      });
      currentComp.setState({
        rent: parseInt(snapshot.val().Rent),
      });
      currentComp.setState({
        utility: parseInt(snapshot.val().Utility),
      });
    });

    userRef = database
      .ref('Users/')
      .child(userEmail)
      .child('Banking Info');

    userRef.on('value', function(snapshot) {
      currentComp.setState({
        account: parseInt(snapshot.val().Account),
      });
      currentComp.setState({
        branch: parseInt(snapshot.val().Branch),
      });
      currentComp.setState({
        transit: parseInt(snapshot.val().Transit),
      });
    });

    userRef = database
      .ref('Users/')
      .child(userEmail)
      .child('Personal Info');
    userRef.on('value', function(snapshot) {
      currentComp.setState({
        province: snapshot.val().Prov_code,
      });
    });
  }

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
          <br />
          <h1 className="caption">Financial Snapshot</h1>
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
                      secondaryText={this.state.province}
                    />

                    <ListItem
                      className="header"
                      primaryText="Provincial Tax-Bracket Designation"
                      secondaryText={
                        this.state.provincial_designation
                      }
                    />

                    <ListItem
                      className="header"
                      primaryText="Annual Provincial Taxes"
                      secondaryText={'$' + this.state.provincial_tax}
                    />

                    <ListItem
                      className="header"
                      primaryText="Federal Tax-Bracket Designation"
                      secondaryText={this.state.federal_designation}
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
        </React.Fragment>
      </MuiThemeProvider>
    ); //fragment allows a list of children to be grouped without adding extra nodes to DOM
  }
}
