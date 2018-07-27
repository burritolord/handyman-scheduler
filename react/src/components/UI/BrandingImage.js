import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = {
  branding: {
    width: '200px',
    height: 'inherit',
  },
};

const BrandingImage = (props) => {
  const { brandingImage, classes } = props;

  return (
    <img className={classes.branding} alt="test" src={brandingImage} />
  );
};

BrandingImage.defaultProps = {};

BrandingImage.propTypes = {
  brandingImage: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BrandingImage);
