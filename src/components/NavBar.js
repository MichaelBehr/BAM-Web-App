import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MenuNav from './MenuNav';

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <AppBar
          iconElementLeft= 
            {<MenuNav             
              dash = {this.props.dash}
              bank = {this.props.bank}
              res = {this.props.res}
              home = {this.props.home}
              finance = {this.props.finance}
              summary = {this.props.summary}
              terms = {this.props.terms}/>} 
            />
      </div>
    );
  }
}

export default NavigationBar;
