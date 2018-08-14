import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  withStyles,
} from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    paddingLeft: 12,
  },
  drawerItem: {
    textDecoration: 'none',
    ...theme.typography.headline,
    color: 'white',
    '&:not(:last-child)': {
      marginBottom: theme.spacing.unit,
    },
  },
  activeDrawerItem: {
    color: cyan.A100,
  },
});

const DrawerLinks = (props) => {
  const { classes } = props;

  return (
    <Grid
      container
      direction="column"
      alignItems="start"
      className={classes.root}
    >
      <NavLink
        to="/clients"
        className={classes.drawerItem}
        activeClassName={classes.activeDrawerItem}
      >
        Clients
      </NavLink>
      <NavLink
        to="/invoices"
        className={classes.drawerItem}
        activeClassName={classes.activeDrawerItem}
      >
        Invoices
      </NavLink>
      <NavLink
        to="/quotes"
        className={classes.drawerItem}
        activeClassName={classes.activeDrawerItem}
      >
        Quotes
      </NavLink>
      <NavLink
        to="/calendar"
        className={classes.drawerItem}
        activeClassName={classes.activeDrawerItem}
      >
        Calendar
      </NavLink>
    </Grid>
  );
};

DrawerLinks.defaultProps = {

};

DrawerLinks.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(DrawerLinks);
