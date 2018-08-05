import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  root: {
  
  },
});

const ClientList = (props) => {
  const { classes } = props;

  return (
    <Grid
      container
      direction="column"
    >

    </Grid>
  );
};

ClientList.defaultProps = {

};

ClientList.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ClientList);
