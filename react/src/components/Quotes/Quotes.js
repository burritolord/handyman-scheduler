import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  root: {

  },
});

const Quotes = (props) => {
  const { classes } = props;

  return (
    <Grid
      container
      direction="column"
    >
      <Grid
        container
        
      >
        <Typography variant="headline">
          Quotes
        </Typography>
      </Grid>
    </Grid>
  );
};

Quotes.defaultProps = {

};

Quotes.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Quotes);
