import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  withStyles,
} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import TableToolbar from './TableToolbar';
import TitleBar from '../../UI/TitleBar';

let counter = 0;
function createData(name, phone, email, properties) {
  counter += 1;
  return { id: counter, name, phone, email, properties };
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => b[orderBy] - a[orderBy] : (a, b) => a[orderBy] - b[orderBy];
}

const cols = [
  { id: 'name', disablePadding: false, label: 'Name' },
  { id: 'phone', disablePadding: false, label: 'Phone' },
  { id: 'email', disablePadding: false, label: 'Email' },
  { id: 'properties', disablePadding: false, label: 'Properties' },
];

const styles = theme => ({
  root: {
    width: 'inherit',
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  filter: {
    marginRight: theme.spacing.unit,
  },

});

class ClientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'calories',
      selected: [],
      data: [
        createData('Nick James', '510-552-6591', 'blah@yahoo.com', 6),
        createData('Donald Glover', '510-552-3443', 'stuff@gmail.com', 1),
        createData('Josh Daniels', '510-536-6391', 'jdaniels@gmail.com', 2),
        createData('Joe Jacobs', '510-885-5991', 'jacobs@wday.com', 24),
        createData('Audrey James', '510-982-9991', 'james@gmail.com', 5),
        createData('Nicole Smith', '510-432-2642', '@gmail.com', 8),
        createData('Tonya Griffith', '510-321-9944', 'griffith@rainbowitalianice.com', 3),
        createData('Lawrence Waters', '510-903-3298', '@gmail.com', 4),
        createData('Benny Smith', '510-441-9054', 'smith@gmail.com', 1),
        createData('Jimmie James', '925-442-6591', '@gmail.com', 1),
        createData('John Adams', '317-994-0871', 'adams@yahoo.com', 8),
        createData('Micheal Dabney', '415-442-8842', 'dabney@gmail.com', 2),
        createData('America Valasquez', '510-686-5432', 'valasquez@yahoo.com', 2),
      ],
      page: 0,
      rowsPerPage: 5,
    };
  }

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Fragment>
        <TitleBar
          title="People"
          icon={AddCircle}
          action="New client"
          clickHandler={() => {}}
        />
        <Paper className={classes.root}>
          <TableToolbar
            title="People"
            submitHandler={() => {}}
          />
          <div className={classes.tableWrapper}>
            <Table className={classes.table} aria-labelledby="tableTitle">
              <TableHead>
                <TableRow>
                  {cols.map(row => {
                    return (
                      <TableCell
                        key={row.id}
                        padding={row.disablePadding ? 'none' : 'default'}
                      >
                        {row.label}
                      </TableCell>
                    );
                  }, this)}
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .sort(getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(n => {
                    const isSelected = this.isSelected(n.id);
                    return (
                      <TableRow
                        hover
                        onClick={event => this.handleClick(event, n.id)}
                        role="checkbox"
                        aria-checked={isSelected}
                        tabIndex={-1}
                        key={n.id}
                        selected={isSelected}
                      >
                        <TableCell component="th" scope="row">
                          {n.name}
                        </TableCell>
                        <TableCell>{n.phone}</TableCell>
                        <TableCell>{n.email}</TableCell>
                        <TableCell>{n.properties}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 49 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
      </Fragment>
    );
  }
}

ClientList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClientList);