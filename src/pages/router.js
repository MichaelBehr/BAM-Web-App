import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

// Enables easy horizontal list.
import styled from 'styled-components';

// Page imports, each component acts as a page.
import LoginPage from './login';
import ResetPage from './reset';
import SignUpPage from './sign_up';
import TermsAndConditionsPage from './terms_and_conditions';
import DashboardPage from './dashboard';
import PrelimInfo from './prelim_info';
import BankInfo from './bank_info';
import Summary from './summary';
import Mainpage from './Mainpage';
import Userform from './userform';
import Budget from './budget_info';
import Bank from './banking';
import Snapshot from './snapshot';

// ^^^ How to import your own component from another file!

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function Navigator() {
  const List = styled.ul`
    overflow-x: auto;
    list-style: none;
    white-space: nowrap;
    padding: 0;
  `;
  const ListItem = styled.li`
    display: inline-block;
    padding: 4px 16px;
    margin-right: 16px;
  `;

  return (
    <div style={{ height: '100%' }}>
      <Router>
        <div>
          <List>
            <ListItem>
              <Link to="/userform">New User</Link>
            </ListItem>
            <ListItem>
              <Link to="/login">Login</Link>
            </ListItem>
            <ListItem>
              <Link to="/signup">Sign up</Link>
            </ListItem>
            <ListItem>
              <Link to="/reset">Reset</Link>
            </ListItem>
            <ListItem>
              <Link to="/terms_and_conditions">
                Terms and Conditions
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/budget_info">Budget Info</Link>
            </ListItem>
            <ListItem>
              <Link to="/banking">Banking Information</Link>
            </ListItem>
            <ListItem>
              <Link to="/snapshot">Financial Snapshot</Link>
            </ListItem>
            <ListItem>
              <Link to="/dashboard">Dashboard</Link>
            </ListItem>
          </List>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/userform">
              <Userform />
            </Route>
            <Route exact path="/login">
              <Mainpage />
            </Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <Route path="/reset">
              <ResetPage />
            </Route>
            <Route path="/terms_and_conditions">
              <TermsAndConditionsPage />
            </Route>
            <Route path="/budget_info">
              <Budget />
            </Route>
            <Route path="/banking">
              <Bank />
            </Route>
            <Route path="/snapshot">
              <Snapshot />
            </Route>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
