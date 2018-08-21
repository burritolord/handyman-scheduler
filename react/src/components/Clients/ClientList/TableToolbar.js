import React from 'react';
import PropTypes from 'prop-types';
import {
  InputAdornment,
  MenuItem,
  TextField,
  Toolbar,
  withStyles,
} from '@material-ui/core';
import {
  grey,
} from '@material-ui/core/colors';
import {
  Search,
} from '@material-ui/icons';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    backgroundColor: grey.A100,
  },
  search: {
    width: 240,
    marginRight: theme.spacing.unit * 2,
    flexGrow: '2',
  },
  sort: {
    width: 160,
    flexGrow: '1',
  },
  form: {
    display: 'flex',
    width: '100%',

  },
  title: {
    flex: '0 0 auto',
  },
  input: {
    borderRadius: '4px',
    textAlign: 'center',
    backgroundColor: 'white',
  },
});

const TableToolbar = (props) => {
  const {
    classes,
    className: classNameProp,
    submitHandler,
  } = props;

  const className = classNames(
    classes.root,
    classNameProp,
  );

  return (
    <Toolbar className={className}>
      <form
        className={classes.form}
        onSubmit={submitHandler}
      >
        <TextField
          className={classNames(classes.search, classes.input)}
          id="search"
          name="search"
          placeholder="Search..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
        />
        <TextField
          select
          className={classNames(classes.sort, classes.input)}
          id="sort"
          name="sort"
          onChange={submitHandler}
          InputProps={{
            disableUnderline: true,
          }}
        >
          <MenuItem value="first_name">
            First Name
          </MenuItem>
          <MenuItem value="last_name">
            Last Name
          </MenuItem>
        </TextField>
      </form>
    </Toolbar>
  );
};

TableToolbar.defaultProps = {
  className: '',
};

TableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  submitHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(TableToolbar);
