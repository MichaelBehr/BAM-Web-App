import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Account from 'material-ui/svg-icons/action/account-circle';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Verified from 'material-ui/svg-icons/action/verified-user';
import Trend from 'material-ui/svg-icons/action/trending-up';
import Money from 'material-ui/svg-icons/editor/attach-money';

export default class MenuNav extends Component {

  dash = e => {
    e.preventDefault();
    this.props.dash();
  }

  bank = e => {
    e.preventDefault();
    this.props.bank();
  }

  reset = e => {
    e.preventDefault();
    this.props.reset();
  }

  home = e => {
    e.preventDefault();
    this.props.home();
  }

  finance = e => {
    e.preventDefault();
    this.props.finance();
  }

  summary = e => {
    e.preventDefault();
    this.props.summary();
  }

  terms = e => {
    e.preventDefault();
    this.props.terms();
  }

  render() {
    return (
      <React.Fragment>
        <IconMenu
          iconButtonElement={<IconButton><Menu /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >

        <MenuItem
          primaryText="Account Settings"
          leftIcon={<Account />} 
          rightIcon={<ArrowDropRight />}
          menuItems={[
            <MenuItem 
              primaryText="Banking Information"
              onClick = {this.bank}
            />,
            <MenuItem 
              primaryText="Reset Password" 
              onClick = {this.home}
            />,
            <MenuItem 
              primaryText="Sign Out" 
              onClick = {this.home}
              />,
          ]}
        />

        <MenuItem
          primaryText="Budget Settings"
          rightIcon={<ArrowDropRight />}
          leftIcon = {<Money/>}
          menuItems={[
            <MenuItem 
              primaryText="Budgeting Information" 
              onClick = {this.finance}
            />,
            <MenuItem 
              primaryText="Financial Snapshot" 
              onClick = {this.summary}
            />,
          ]}
        />
      
        <MenuItem
          primaryText="Financial Dashboard"
          leftIcon = {<Trend/>}
          onClick = {this.dash}
        />

        <Divider />
        <MenuItem 
          primaryText="Terms and Conditions" 
          leftIcon = {<Verified/>}
          onClick = {this.terms}
        />

        </IconMenu>
      </React.Fragment>
    )
  }
}