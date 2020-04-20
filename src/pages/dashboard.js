import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StackedBarChart from '../components/plots';
import NavigationBar from '../components/NavBar';
import './dashboard.css';
import HighLevelSummary from '../components/Dashboard_HighLevelSummary';
import RecentPurchases from '../components/Dashboard_RecentPurchases';
import SavingsContainer from '../components/Dashboard_SavingsContainer';
import Center from 'react-center';

class DashboardPage extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="dash_container">
          <NavigationBar
            dash={this.props.dash}
            bank={this.props.bank}
            res={this.props.res}
            home={this.props.home}
            finance={this.props.finance}
            summary={this.props.summary}
            terms={this.props.terms}
          />
          <div style={{ float: 'left', width: '50%' }}>
            <div className="dash_content_container">
              {
                <div className="dash_content">
                  <h2>Welcome to BAM!</h2>
                  <h3>
                    Your friendly neighborhood budgeting app! Here are
                    your monthly statistics:
                  </h3>
                  <div style={{ width: '100%' }}>
                    <HighLevelSummary email={this.props.email} />
                  </div>
                </div>
              }
            </div>
            <div className="dash_content_container_tall">
              {
                <div className="dash_content">
                  <h2>Recent Purchases</h2>
                  <RecentPurchases />
                </div>
              }
              <div className="dash_content">
                <h2>Curious About Compounding Interest?</h2>

                <SavingsContainer />
              </div>
            </div>
          </div>
          <div style={{ float: 'right', width: '50%' }}>
            <div className="dash_graph_container">
              <div className="dash_graph">
                <h2>Your Monthly Breakdown</h2>
                {console.log('Email - ', this.props.email)}
                <div style={{ height: '90%' }}>
                  <StackedBarChart email={this.props.email} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default DashboardPage;
