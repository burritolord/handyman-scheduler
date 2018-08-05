import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {},
});

const DrawerLinks = (props) => {
  const { classes } = props;

  return (
    <Fragment>
      draw links
    </Fragment>
  );
};

DrawerLinks.defaultProps = {

};

DrawerLinks.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(DrawerLinks);
