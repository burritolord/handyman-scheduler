import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {

  },
});

const NotFound = (props) => {
  const { classes } = props;

  return (
    <h3>
      Not Found
    </h3>
  );
};

NotFound.defaultProps = {

};

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);
