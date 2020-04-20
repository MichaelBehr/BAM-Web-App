import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Center from 'react-center';

export default function RecentPurchases(props) {
  return (
    <div>
      <Table>
        <TableHeader
          fixedHeader={true}
          displaySelectAll={false}
          adjustForCheckbox={false}
          enableSelectAll={false}
        >
          <TableRow>
            <TableHeaderColumn>Purchase</TableHeaderColumn>
            <TableHeaderColumn>Amount</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>Purchase 1.</TableRowColumn>
            <TableRowColumn>Purchase 1 amount.</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Purchase 2.</TableRowColumn>
            <TableRowColumn>Purchase 2 amount.</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Purchase 3.</TableRowColumn>
            <TableRowColumn>Purchase 3 amount.</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Purchase 4.</TableRowColumn>
            <TableRowColumn>Purchase 4 amount.</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Purchase 5.</TableRowColumn>
            <TableRowColumn>Purchase 5 amount.</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
