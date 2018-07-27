import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {

  },
});

const Signup = (props) => {
  const { classes } = props;

  return (
    <Grid
      container
      className={classes.root}
    >
      Signup page
    </Grid>
  );
};

Signup.defaultProps = {

};

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Signup);
