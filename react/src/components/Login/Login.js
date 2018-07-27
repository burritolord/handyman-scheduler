import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {

  },
});

const Login = (props) => {
  const { classes } = props;

  return (
    <Grid
      container
      className={classes.root}
    >
      Login page
    </Grid>
  );
};

Login.defaultProps = {

};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Login);
