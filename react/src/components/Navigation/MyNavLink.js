import React from 'react';
import PropTypes from 'prop-types';
import { Button, withStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const styles = {
  root: {
  },
};

const MyLink = ({ to, ...other }) => <NavLink to={to} {...other} />;

const MyNavLink = props => (
  <Button component={MyLink} {...props} />
);

MyLink.propTypes = {
  to: PropTypes.string.isRequired,
};


export default withStyles(styles)(MyNavLink);
