import React, { PureComponent } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import firebase from '../components/firebaseConfig';

class StackedBarChart extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      exp_commute: 0,
      exp_entertainment: 0,
      exp_groceries: 0,
      exp_internet: 0,
      exp_phone: 0,
      exp_rent: 0,
      exp_utility: 0,
      acc_commute: 0,
      acc_entertainment: 0,
      acc_groceries: 0,
      acc_internet: 0,
      acc_phone: 0,
      acc_rent: 0,
      acc_utility: 0,
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchData();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  // fetch data from firebase database for current user
  fetchData() {
    const userEmail = this.props.email.replace('.', 'dot');

    var database = firebase.database();
    let userRef = database
      .ref('Users/')
      .child(userEmail)
      .child('Financial Profile')
      .child('Monthly Expenses');

    let currentComp = this;
    if (this._isMounted) {
      userRef.on('value', function(snapshot) {
        currentComp.setState({
          exp_commute: parseInt(snapshot.val().Commute),
        });
        currentComp.setState({
          exp_entertainment: parseInt(snapshot.val().Entertainment),
        });
        currentComp.setState({
          exp_groceries: parseInt(snapshot.val().Groceries),
        });
        currentComp.setState({
          exp_internet: parseInt(snapshot.val().Internet),
        });
        currentComp.setState({
          exp_phone: parseInt(snapshot.val().Phone),
        });
        currentComp.setState({
          exp_rent: parseInt(snapshot.val().Rent),
        });
        currentComp.setState({
          exp_utility: parseInt(snapshot.val().Utility),
        });
      });
    }

    userRef = database
      .ref('Users/')
      .child(userEmail)
      .child('Financial Profile')
      .child('Real-time Budget');
    if (this._isMounted) {
      userRef.on('value', function(snapshot) {
        currentComp.setState({
          acc_commute: parseInt(snapshot.val().Commute),
        });
        currentComp.setState({
          acc_entertainment: parseInt(snapshot.val().Entertainment),
        });
        currentComp.setState({
          acc_groceries: parseInt(snapshot.val().Groceries),
        });
        currentComp.setState({
          acc_internet: parseInt(snapshot.val().Internet),
        });
        currentComp.setState({
          acc_phone: parseInt(snapshot.val().Phone),
        });
        currentComp.setState({
          acc_rent: parseInt(snapshot.val().Rent),
        });
        currentComp.setState({
          acc_utility: parseInt(snapshot.val().Utility),
        });
      });
    }
  }

  render() {
    return (
      <ResponsiveBar
        data={[
          {
            Category: 'Commute',
            Expected: this.state.exp_commute,
            Actual: this.state.acc_commute,
          },
          {
            Category: 'Entertainment',
            Expected: this.state.exp_entertainment,
            Actual: this.state.acc_entertainment,
          },
          {
            Category: 'Groceries',
            Expected: this.state.exp_groceries,
            Actual: this.state.acc_groceries,
          },
          {
            Category: 'Internet',
            Expected: this.state.exp_internet,
            Actual: this.state.acc_internet,
          },
          {
            Category: 'Phone',
            Expected: this.state.exp_phone,
            Actual: this.state.acc_phone,
          },
          {
            Category: 'Rent',
            Expected: this.state.exp_rent,
            Actual: this.state.acc_rent,
          },
          {
            Category: 'Utility',
            Expected: this.state.exp_utility,
            Actual: this.state.acc_utility,
          },
        ]}
        keys={['Expected', 'Actual']}
        indexBy="Category"
        margin={{ top: 10, right: 130, bottom: 100, left: 60 }}
        padding={0.1}
        groupMode="grouped"
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickRotation: -45,
          legend: 'Category',
          legendPosition: 'middle',
          legendOffset: 60,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Amount ($)',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    );
  }
}
export default StackedBarChart;
