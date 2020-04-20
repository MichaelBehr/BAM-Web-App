import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { blue500, white, black } from 'material-ui/styles/colors';

const styles = {
  underlineStyle: {
    borderColor: black,
  },
  underlineFocusStyle: {
    borderColor: blue500,
  },
  floatingLabelStyle: {
    color: black,
  },
  floatingLabelFocusStyle: {
    color: black,
  },
  buttonStyle: {
    wrapText: true,
  },
  backgroundColor: white,
};

export default class SavingsProjection extends React.Component { 
  
  calculate = e => {
    e.preventDefault();
    this.props.CalculateProjection(this.props.items.principal,this.props.items.interest, this.props.items.period);
  };

  render() {
    const { items, handleChange } = this.props;
    return (
      <React.Fragment>
        <div style={{ backgroundColor: styles.backgroundColor }}>
          <TextField
            floatingLabelText="Principal Amount"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            underlineStyle={styles.underlineStyle}
            underlineFocusStyle={styles.underlineFocusStyle}
            onChange={handleChange('principal')}
            defaultValue={items.principal}
          />
          <br />
          <TextField
            floatingLabelText="Interest Rate (%)"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            underlineStyle={styles.underlineStyle}
            underlineFocusStyle={styles.underlineFocusStyle}
            onChange={handleChange('interest')}
            defaultValue={items.interest}
          />
          <br />
          <TextField
            floatingLabelText="Compounding Period"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            underlineStyle={styles.underlineStyle}
            underlineFocusStyle={styles.underlineFocusStyle}
            onChange={handleChange('period')}
            defaultValue={items.period}
          />
          <br />
          <br />
          <RaisedButton
            buttonStyle={styles.buttonStyle}
            label="View Growth!"
            secondary={true}
            onClick = {this.calculate} 
          />
      </div>
      <Table>
        <TableHeader
          fixedHeader={true}
          displaySelectAll={false}
          adjustForCheckbox={false}
          enableSelectAll={false}
        >
          <TableRow>
            <TableHeaderColumn>Number of Years</TableHeaderColumn>
            <TableHeaderColumn>Amount</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>
            {items.one}
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>5</TableRowColumn>
            <TableRowColumn>
            {items.five}
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>10</TableRowColumn>
            <TableRowColumn>
            {items.ten}
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>20</TableRowColumn>
            <TableRowColumn>
            {items.twenty}
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>40</TableRowColumn>
            <TableRowColumn>
            {items.forty}
            </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
      </React.Fragment>
    );
  }
}

