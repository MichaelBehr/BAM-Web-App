import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Center from 'react-center';

import firebase from '../components/firebaseConfig';

export default class HighLevelSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      take_home: 0,
      total_expenses: 0,
      balance_remaining: 0,
      most_spent: 'Not applicable',
      least_spent: 'Not applicable',
      avg_per_cat: 0,
      num_cat: 7,
      num_exceed_cat: 'Not applicable',
      success_ratio: 'Not applicable',
    };
  }

  componentDidUpdate() {}

  componentDidMount() {
    this.getStats();
  }

  async getStats() {
    const userEmail = this.props.email.replace('.', 'dot');
    var database = firebase.database();
    let userRef = database
      .ref('Users/')
      .child(userEmail)
      .child('Financial Profile')
      .child('Income Info');

    let currentComp = this;
    userRef.on('value', async function(snapshot) {
      await currentComp.setState(
        {
          take_home: snapshot.val().Monthly_take_home,
        },
        () => {
          console.log();
        },
      );
    });

    // get total expenses
    userRef = database
      .ref('Users/')
      .child(userEmail)
      .child('Financial Profile')
      .child('Real-time Budget');

    userRef.on('value', async function(snapshot) {
      await currentComp.setState(
        {
          total_expenses: snapshot.val().Total_spent,
        },
        () => {
          console.log();
        },
      );
    });

    //calculate most spent category
    userRef
      .orderByValue()
      .limitToLast(2)
      .on('value', function(snapshot) {
        const data = snapshot.val();
        const key = Object.keys(data)[0];
        currentComp.setState({
          most_spent: key,
        });
        console.log(key);
      });

    userRef
      .orderByValue()
      .limitToFirst(1)
      .on('value', function(snapshot) {
        const data = snapshot.val();
        const key = Object.keys(data)[0];
        currentComp.setState({
          least_spent: key,
        });
        console.log(key);
      });

    userRef = database
      .ref('Users/')
      .child(userEmail)
      .child('Financial Profile')
      .child('Stats');

    userRef.on('value', async function(snapshot) {
      currentComp.setState({
        num_exceed_cat: snapshot.val().num_exceed_cat,
      });
      currentComp.setState({
        success_ratio: snapshot.val().success_ratio,
      });
    });
  }

  render() {
    const remaining = (
      this.state.take_home - this.state.total_expenses
    ).toFixed(2);

    const avg_per_cat = parseFloat(
      this.state.total_expenses / 7,
    ).toFixed(2);
    return (
      <div>
        <Center>
          <div className="highlvl_sizing">
            <div className="highlvl">
              <Center>
                <List className="highlvl_left">
                  <h3 className="highlvl_left">Basic Stats</h3>
                  <ListItem
                    primaryText="Take-Home Income:"
                    secondaryText={
                      '$' + this.state.take_home.toFixed(2)
                    }
                  />
                  <ListItem
                    primaryText="Total Expenditure:"
                    secondaryText={
                      '$' + this.state.total_expenses.toFixed(2)
                    }
                  />
                  <ListItem
                    primaryText="Remaining Balance:"
                    secondaryText={'$' + remaining}
                  />
                </List>
              </Center>
              <Center>
                <List className="highlvl_middle">
                  <h3 className="highlvl_left">Expenditure Stats</h3>
                  <ListItem
                    primaryText="Most-Spent Category:"
                    secondaryText={this.state.most_spent}
                  />
                  <ListItem
                    primaryText="Least-Spent Category:"
                    secondaryText={this.state.least_spent}
                  />
                  <ListItem
                    primaryText="Average/Category :"
                    secondaryText={'$' + avg_per_cat}
                  />
                </List>
              </Center>
              <Center>
                <List className="highlvl_right">
                  <h3 className="highlvl_left">Success Stats</h3>
                  <ListItem
                    primaryText="Total # of Categories"
                    secondaryText={this.state.num_cat}
                  />
                  <ListItem
                    primaryText="# of Exceeded Categories:"
                    secondaryText={this.state.num_exceed_cat}
                  />
                  <ListItem
                    primaryText="Success Ratio:"
                    secondaryText={this.state.success_ratio}
                  />
                </List>
              </Center>
            </div>
          </div>
        </Center>
      </div>
    );
  }
}
